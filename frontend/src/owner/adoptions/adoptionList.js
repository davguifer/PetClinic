import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../../services/token.service";
import "../../static/css/admin/adminPage.css";
import deleteFromList from "../../util/deleteFromList";
import getErrorModal from "../../util/getErrorModal";
import useFetchState from "../../util/useFetchState";
import { Feature, On, feature, fetchWithPricingInterceptor } from "pricing4react";

const jwt = tokenService.getLocalAccessToken();

export default function AdoptionList() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [adoptions, setAdoptions] = useFetchState(
    [],
    `/api/v1/adoptions`,
    jwt,
    setMessage,
    setVisible
  );
  const [alerts, setAlerts] = useState([]);

  const currentUser = tokenService.getUser();
  
  const adoptionsList = adoptions.map((adoption) => {
      const isOwner = adoption.owner.user.id === currentUser.id;
      if(!adoption.isAccepted){
        return (
          <tr key={adoption.id}>
            <td>{adoption.owner.firstName} {adoption.owner.lastName}</td>
            <td>{adoption.pet.name}</td>
            <td>{adoption.pet.type.name}</td>
            <td>{adoption.description}</td>
            <td>
              {isOwner && adoption.adopter === null ? (
                <ButtonGroup>
                  <Button
                    size="sm"
                    color="primary"
                    aria-label={"edit-" + adoption.id}
                    tag={Link}
                    to={"/adoptions/" + adoption.id}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    aria-label={"delete-" + adoption.id}
                    onClick={() =>
                      deleteFromList(
                        `/api/v1/adoptions/${adoption.id}`,
                        adoption.id,
                        [adoptions, setAdoptions],
                        [alerts, setAlerts],
                        setMessage,
                        setVisible
                      )
                    }
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              ) : isOwner && adoption.adopter !== null ? (
                  <Button
                    size="sm"
                    color="warning"
                    aria-label={"request-" + adoption.id}
                    tag={Link}
                    to={"/adoptions/"+ adoption.id +"/request/"}
                  >
                    Request
                  </Button>
                ) : (adoption.adopter ===null ) ? (
                <Feature>
                  <On expression={feature("pets")}>
                    <Button
                    size="sm"
                    color="info"
                    aria-label={"apply-" + adoption.id}
                    tag={Link}
                    to={"/adoptions/" + adoption.id +"/apply/"}
                  >
                    Apply
                </Button>
                  </On>
                </Feature>
              ) :(adoption.adopter.user.id === currentUser.id)?
               <span>You have already applied</span>:
               <span>Someone else has already applied</span>
            }
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
          <Button color="success" tag={Link} to="/adoptions/new">
            Add adoption
          </Button>
        </div>
        <div>
          <Table aria-label="owners" className="mt-4">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Owner</th>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Pet</th>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Type</th>
                <th style={{ backgroundColor: "#B48969" }} width="20%">Description</th>
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
