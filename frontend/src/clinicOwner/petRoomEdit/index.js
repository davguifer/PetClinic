import "../../static/css/auth/authButton.css";
import "../../static/css/auth/authPage.css";
import tokenService from "../../services/token.service";
import getIdFromUrl from "../../util/getIdFromUrl";
import getErrorModal from "../../util/getErrorModal";
import useFetchState from "../../util/useFetchState";
import { petRoomEditInputs } from "./form/petRoomEditInputs";
import FormGenerator from "../../components/formGenerator/formGenerator";
import { useState, useRef, useEffect } from "react";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function EditPetRoom() {
  const id = getIdFromUrl(2);
  const editPetRoomFormRef = useRef();

  const emptyItem = {
    id: null,
    name: null,
    petType: null,
    clinic: null,
    size: null,
  };

  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  const [petRoom, setPetRoom] = useFetchState(
    emptyItem,
    `/api/v1/rooms/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  const [clinics, setClinics] = useFetchState(
    [],
    `/api/v1/clinics?userId=${user.id}`,
    jwt,
    setMessage,
    setVisible
  );
  const [petTypes, setPetTypes] = useFetchState(
    [],
    `/api/v1/pets/types`,
    jwt,
    setMessage,
    setVisible
  );

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let newPetRoom = petRoom;
    if (name === "petType") {
      newPetRoom.petType= petTypes.filter(
        (petType) => petType.id === Number(value))[0];
    } else if (name === "clinic"){
      newPetRoom.clinic= clinics.filter(
        (clinic) => clinic.id === Number(value))[0];
    } else if (name === "name"){
      newPetRoom.name = value;
    }else{
      newPetRoom.size = value;
    }
    setPetRoom(newPetRoom);
  }

  function handleSubmit({values}) {
    if (!editPetRoomFormRef.current.validate()) return;
    
    const myPetRoom = {
      id: id !== "new"? id : 0,
      name: values["name"],
      petType: petTypes.filter((petType) => petType.name === values["petType"])[0],
      clinic: clinics.filter((clinic) => clinic.name === values["clinic"])[0],
      size: values["size"]
    }

    fetch(
      "/api/v1/rooms" + (id !== "new" ? "/" + petRoom.id : ""),
      {
        method: id !== "new" ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myPetRoom),
      }
    )
    .then((response) => response.json())
    .then((json) => {
      if (json.message) {
        setMessage(json.message);
        setVisible(true);
      } else window.location.href = "/rooms";
    })
    .catch((message) => alert(message));
  }

  petRoomEditInputs.forEach(i => i.handleChange=handleChange);

  if(petRoomEditInputs[1].values.length < 2) {
    petRoomEditInputs[1].values = [
      ...petRoomEditInputs[1].values,
      ...petTypes.map((petType) => petType.name),
    ];
  }

  if(petRoomEditInputs[2].values.length < 2) {
    petRoomEditInputs[2].values = [
      ...petRoomEditInputs[2].values,
      ...clinics.map((clinic) => clinic.name),
    ];
  }

  useEffect(() => {
    if (petRoom.id !== "new") {
      petRoomEditInputs.forEach((input) => {
        if(["petType", "clinic"].includes(input.name)){
          input.defaultValue = petRoom[input.name]? petRoom[input.name].name: petRoom[input.name];
        }else{
          input.defaultValue = petRoom[input.name];
        }
        setDataLoaded(true);
      });
    } else {
      petRoomEditInputs.forEach((input) => {
        input.defaultValue = "";
      });
    }
  }, [petRoom]);

  const modal = getErrorModal(setVisible, visible, message);

  return (
    <div className="auth-page-container">
      {<h2>{id !== "new" ? "Edit Pet Room" : "Add Pet Room"}</h2>}
      {modal}
      <div className="auth-form-container">
        {id !== "new" ? (
          <FormGenerator
            ref={editPetRoomFormRef}
            inputs={petRoomEditInputs}
            onSubmit={handleSubmit}
            buttonText="Edit"
            buttonClassName="auth-button"
          />
        ) : (
          <FormGenerator
            ref={editPetRoomFormRef}
            inputs={petRoomEditInputs}
            onSubmit={handleSubmit}
            buttonText="Add"
            buttonClassName="auth-button"
          />
        )}
      </div>
    </div>
  );
}
