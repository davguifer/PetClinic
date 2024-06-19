import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../../services/token.service";
import useFetchState from "../../util/useFetchState";
import getErrorModal from "../../util/getErrorModal";
import "../../static/css/admin/adminPage.css";
import { useNavigate } from "react-router-dom";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function PetRoomsList() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [petRooms, setPetRooms] = useFetchState(
    [],
    `/api/v1/rooms`,
    jwt,
    setMessage,
    setVisible
  );
  const [alerts, setAlerts] = useState([]);

  const navigator = useNavigate();

  const petRoomsList =
    petRooms.filter((petRoom) => petRoom !== undefined ? petRoom.clinic.clinicOwner.user.id === user.id : false)
    .map((petRoom) => {
        return (
          <tr key={petRoom.id}>
            <td className="text-center">{petRoom.name}</td>
            <td className="text-center">{petRoom.petType.name}</td>
            <td className="text-center">{petRoom.clinic.name}</td>
            <td className="text-center">{petRoom.size}</td>
            <td className="text-center">
              <ButtonGroup>
                <Button
                  size="sm"
                  color="primary"
                  aria-label={"edit-" + petRoom.name}
                  tag={Link}
                  to={"/rooms/" + petRoom.id}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  aria-label={"delete-" + petRoom.name}
                  onClick={() => {
                    let confirmMessage = window.confirm("Are you sure you want to delete it?");

                    if(!confirmMessage) return;

                    fetch(`/api/v1/rooms/${petRoom.id}`, {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                      },
                    })
                      .then((res) => {
                        if (res.status === 200) {
                          setMessage("Pet Room deleted successfully");
                          setVisible(true);
                          navigator(0);
                        }
                      })
                      .catch((err) => {
                        setMessage(err.message);
                        setVisible(true);
                      });
                  }}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        );
      });

      
  const modal = getErrorModal(setVisible, visible, message);

  return (
    <div>
      <div className="admin-page-container">
        <h1 className="text-center">Pet Rooms</h1>
        {alerts.map((a) => a.alert)}
        {modal}
        <div className="float-right">
          <Button color="success" tag={Link} to="/rooms/new">
            Add Pet Room
          </Button>
        </div>
        <div>   
          <Table aria-label="petRooms" className="mt-4">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#B48969" }} width="15%" className="text-center">Name</th>
                <th style={{ backgroundColor: "#B48969" }} width="15%" className="text-center">Pet Type</th>
                <th style={{ backgroundColor: "#B48969" }} width="15%" className="text-center">Clinic</th>
                <th style={{ backgroundColor: "#B48969" }} width="15%" className="text-center">Size</th>
                <th style={{ backgroundColor: "#B48969" }} width="30%" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>{petRoomsList}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
