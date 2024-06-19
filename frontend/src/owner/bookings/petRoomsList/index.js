import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../../../services/token.service";
import useFetchState from "../../../util/useFetchState";
import getErrorModal from "../../../util/getErrorModal";
import "../../../static/css/admin/adminPage.css";

const jwt = tokenService.getLocalAccessToken();
const user = tokenService.getUser();

export default function PetRoomsList() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [owner, setOwner] = useFetchState(
    [],
    `/api/v1/plan`,
    jwt,
    setMessage,
    setVisible
  );
  const [petRooms, setPetRooms] = useFetchState(
    [],
    `/api/v1/rooms`,
    jwt,
    setMessage,
    setVisible
  );
  const [pets, setPets] = useFetchState(
    [],
    `/api/v1/pets?userId=${user.id}`,
    jwt,
    setMessage,
    setVisible
  );
  const [alerts, setAlerts] = useState([]);

  const petRoomsList =
    petRooms.filter((petRoom) => petRoom !== undefined ? petRoom.clinic.id === owner.clinic.id : false)
    .filter((petRoom) => petRoom !== undefined ? pets.map((pet) => pet.type.id).includes(petRoom.petType.id) : false)
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
                  to={"/rooms/" + petRoom.id + "/booking"}
                >
                  Create booking
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
