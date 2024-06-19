import "../../../static/css/auth/authButton.css";
import "../../../static/css/auth/authPage.css";
import tokenService from "../../../services/token.service";
import getIdFromUrl from "../../../util/getIdFromUrl";
import getErrorModal from "../../../util/getErrorModal";
import useFetchState from "../../../util/useFetchState";
import { bookingEditInputs } from "./form/bookingEditInputs";
import FormGenerator from "../../../components/formGenerator/formGenerator";
import { useState, useRef, useEffect } from "react";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function EditBooking() {
  const id = getIdFromUrl(2);
  const editBookingFormRef = useRef();

  const [booking, setBooking] = useState({
    id: null,
    startDate: null,
    endDate: null,
    pet: null
  })

  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  const [petRoom, setPetRoom] = useFetchState(
    null,
    `/api/v1/rooms/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  const [pets, setPets] = useFetchState(
    [],
    `/api/v1/pets?userId=${user.id}`,
    jwt,
    setMessage,
    setVisible
  );

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let newBooking = booking;
    if (name === "startDate") {
      newBooking.startDate = value;
    } else if (name === "endDate") {
      newBooking.endDate = value;
    } else if (name === "pet"){
      newBooking.pet= pets.filter(
        (pet) => pet.id === Number(value))[0];
    } else {
      newBooking.name = petRoom;
    }
    setBooking(newBooking);
  }

  function handleSubmit({values}) {
    if (!editBookingFormRef.current.validate()) return;
    
    const myBooking = {
      id: 0,
      startDate: values["startDate"],
      endDate: values["endDate"],
      pet: pets.filter((pet) => pet.name === values["pet"])[0],
      petRoom: petRoom,
      size: values["size"]
    }

    fetch(`/api/v1/bookings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBooking),
    })
    .then((response) => response.json())
    .then((json) => {
      if (json.message) {
        setMessage(json.message);
        setVisible(true);
      } else window.location.href = "/bookings";
    })
    .catch((message) => alert(message));
  }

  bookingEditInputs.forEach(i => i.handleChange=handleChange);

  if(bookingEditInputs[2].values.length < 2) {
    bookingEditInputs[2].values = [
      ...bookingEditInputs[2].values,
      ...pets.filter((pet) => pet.type.id === petRoom.petType.id).map((pet) => pet.name),
    ];
  }

  useEffect(() => {
    bookingEditInputs.forEach((input) => {
      input.defaultValue = booking[input.name];
      setDataLoaded(true);
    });
  }, [booking]);

  const modal = getErrorModal(setVisible, visible, message);

  return (
    <div className="auth-page-container">
      {<h2>Create Booking</h2>}
      {modal}
      <div className="auth-form-container">
        <FormGenerator
          ref={editBookingFormRef}
          inputs={bookingEditInputs}
          onSubmit={handleSubmit}
          buttonText="Create"
          buttonClassName="auth-button"
        />
      </div>
    </div>
  );
}
