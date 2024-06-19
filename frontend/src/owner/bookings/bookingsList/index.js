import { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../../../services/token.service";
import useFetchState from "../../../util/useFetchState";
import getErrorModal from "../../../util/getErrorModal";
import "../../../static/css/admin/adminPage.css";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function BookingList() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [bookings, setBookings] = useFetchState(
    [],
    `/api/v1/bookings`,
    jwt,
    setMessage,
    setVisible
  );
  const [alerts, setAlerts] = useState([]);

  const bookingsList =
    bookings.filter((booking) => booking !== undefined ? booking.pet.owner.user.id === user.id : false)
    .map((booking) => {
        return (
          <tr key={booking.id}>
            <td className="text-center">{booking.petRoom.name}</td>
            <td className="text-center">{booking.petRoom.clinic.name}</td>
            <td className="text-center">{booking.pet.name}</td>
            <td className="text-center">{booking.startDate}</td>
            <td className="text-center">{booking.endDate}</td>
            <td className="text-center">
              <ButtonGroup>
                {(new Date(booking.startDate) > new Date()) && <Button
                  size="sm"
                  color="danger"
                  aria-label={"delete-" + booking.id}
                  onClick={() => {
                    let confirmMessage = window.confirm("Are you sure you want to cancel it?");

                    if(!confirmMessage) return;

                    fetch(`/api/v1/bookings/${booking.id}`, {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                      },
                    })
                      .then((res) => {
                        if (res.status === 200) {
                          setMessage("Booking cancel successfully");
                          setVisible(true);
                          setBookings(bookings.filter((b) => b.id !== booking.id))
                        }
                      })
                      .catch((err) => {
                        setMessage(err.message);
                        setVisible(true);
                      });
                  }}
                >
                  Cancel
                </Button>}
              </ButtonGroup>
            </td>
          </tr>
        );
      });

      
  const modal = getErrorModal(setVisible, visible, message);

  return (
    <div>
      <div className="admin-page-container">
        <h1 className="text-center">My bookings</h1>
        {alerts.map((a) => a.alert)}
        {modal}
        <div>   
          <Table aria-label="petRooms" className="mt-4">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#B48969" }} width="15%" className="text-center">Petroom Name</th>
                <th style={{ backgroundColor: "#B48969" }} width="20%" className="text-center">Clinic</th>
                <th style={{ backgroundColor: "#B48969" }} width="10%" className="text-center">Pet</th>
                <th style={{ backgroundColor: "#B48969" }} width="30%" className="text-center">Start Date</th>
                <th style={{ backgroundColor: "#B48969" }} width="30%" className="text-center">End Date</th>
                <th style={{ backgroundColor: "#B48969" }} width="10%" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>{bookingsList}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
