import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../../services/token.service";
import "../../static/css/admin/adminPage.css";
import getErrorModal from "../../util/getErrorModal";
import getIdFromUrl from "../../util/getIdFromUrl";
import useFetchState from "../../util/useFetchState";


const jwt = tokenService.getLocalAccessToken();

export default function ApplicationList() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [adoptions, setAdoptions] = useFetchState(
    [],
    `/api/v1/adoptions`,
    jwt,
    setMessage,
    setVisible
  );
  const id = getIdFromUrl(2);
  const [alerts, setAlerts] = useState([]);

  const currentUser = tokenService.getUser();

  const adoptionsList = adoptions.map((adoption) => {
      if(adoption.id==id){
        return (
          <tr key={adoption.id}>
            <td>{adoption.pet.name}</td>
            <td>{adoption.pet.type.name}</td>
            <td>{adoption.adopter.firstName} {adoption.adopter.lastName}</td>
            <td>{adoption.application}</td>
            <td>
                <ButtonGroup>
                  <Button
                    size="sm"
                    color="primary"
                    aria-label={"Accept-" + adoption.id}
                    tag={Link}
                    to={"/adoptions/"}
                    onClick={() => {
                    fetch(`/api/v1/adoptions/${adoption.id}`, {
                        method: "PUT",
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            ...adoption,
                            isAccepted: true 
                        }),
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.message) {
                            setMessage(data.message);
                            setVisible(true);
                        } else {
                            // Actualizar el estado local si es necesario
                            const updatedAdoptions = adoptions.map((a) =>
                                a.id === adoption.id ? { ...a, isAccepted: true } : a
                            );
                            setAdoptions(updatedAdoptions);
                        }
                    })
                    fetch(`/api/v1/pets/${adoption.pet.id}`, {
                      method: "PUT",
                      headers: {
                          Authorization: `Bearer ${jwt}`,
                          Accept: "application/json",
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                          ...adoption.pet,
                          owner:adoption.adopter 
                      }),
                  })
                    .catch((error) => alert(error.message));
                }}
                    >
                    Accept
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    aria-label={"Cancel-" + adoption.id}
                    tag={Link}
                    to={"/adoptions/"}
                    onClick={() => {
                        fetch(`/api/v1/adoptions/${adoption.id}`, {
                            method: "PUT",
                            headers: {
                                Authorization: `Bearer ${jwt}`,
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                ...adoption,
                                adopter: null,
                                application: null
                            }),
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.message) {
                                setMessage(data.message);
                                setVisible(true);
                            } else {
                                // Actualizar el estado local si es necesario
                                const updatedAdoptions = adoptions.map((a) =>
                                     a.id === adoption.id ? { ...a, adopter: null, application: null } : a
                                );
                                setAdoptions(updatedAdoptions);
                            }
                        })
                        .catch((error) => alert(error.message));
                    }}
                  >
                    Cancel
                  </Button>
                </ButtonGroup>
            </td>
          </tr>
        );
      }
  });

  const modal = getErrorModal(setVisible, visible, message);

  return (
    <div>
      <div className="admin-page-container">
        <h1 className="text-center">Adoptions</h1>
        {alerts.map((a) => a.alert)}
        {modal}
        <div className="float-right">
        </div>
        <div>
          <Table aria-label="owners" className="mt-4">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Pet</th>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Type</th>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Adopter</th>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Request</th>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Actions</th>
              </tr>
            </thead>
            <tbody>{adoptionsList}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
