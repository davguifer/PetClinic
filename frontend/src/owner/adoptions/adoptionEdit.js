import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Label } from "reactstrap";
import tokenService from "../../services/token.service";
import getErrorModal from "../../util/getErrorModal";
import getIdFromUrl from "../../util/getIdFromUrl";
import useFetchState from "../../util/useFetchState";

const jwt = tokenService.getLocalAccessToken();
const currentUser = tokenService.getUser();


export default function AdoptionEdit() {
  const emptyItem = {
    id: null,
    owner: null,
    pet: null,
    description: null,
  };
  const id = getIdFromUrl(2);
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [adoption, setAdoption] = useFetchState(
    emptyItem,
    `/api/v1/adoptions/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );

  const [adoptions, setAdoptions] = useFetchState(
    [],
    `/api/v1/adoptions`,
    jwt,
    setMessage,
    setVisible
  );

  const [owner, setOwner] = useState(null);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/pets?userId=${currentUser.id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(petData => {
      setPets(petData); 
      if (petData.length > 0) {
        setOwner(petData[0].owner);
      }
    });
  }, [currentUser, jwt]); 
   
  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setAdoption({ ...adoption, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const selectedPetId = event.target.pet.value;
    const selectedPet = pets.find(pet => String(pet.id) === selectedPetId);
    const petsInAdoption = adoptions.filter(adoption => adoption.isAccepted === false ).map(adoption => adoption.pet);
    const isPetAlreadyAdopted = petsInAdoption.some(pet => String(pet.id) === selectedPetId);

    if(adoption.id === null){
      if (isPetAlreadyAdopted) {
        setMessage("This pet is already in adoption.");
        setVisible(true);
        return; 
      }
    }
    const adoptionToSend = { 
      ...adoption, 
      owner,
      pet: selectedPet  
    };

    fetch("/api/v1/adoptions" + (adoption.id ? "/" + adoption.id : "/new"), {
      method: adoption.id ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adoptionToSend),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message) {
          setMessage(json.message);
          setVisible(true);
        } else window.location.href = "/adoptions";
      })
      .catch((message) => alert(message));
  }

  const modal = getErrorModal(setVisible, visible, message);

  if (pets.length === 0) {
    return <div>No hay mascotas disponibles para adopción en este momento.</div>;
  }

  return (
    <div className="auth-page-container">
      {<h2>{id !== "new" ? "Edit adoptions" : "Add adoptions"}</h2>}
      {modal}
      <div className="auth-form-container">
      <Form onSubmit={handleSubmit}>
          <div className="custom-form-input">
          <Label for="pet" className="custom-form-input-label">
              Pet
            </Label>
            <select
              name="pet"
              id="pet"
              value={adoption.pet  || ''}
              onChange={handleChange}
              className="custom-input"
              required
            >
              <option value="">Select a pet</option>
              {pets.map(pet => (
                <option key={pet.id} value={pet.id}>
                  {pet.name}
                </option>
              ))}
            </select>
          </div>
          <div className="custom-form-input">
            <Label for="description" className="custom-form-input-label">
                Description
            </Label>
            <Input
              type="text"
              required
              name="description"
              id="description"
              value={adoption.description || ""}
              onChange={handleChange}
              className="custom-input"
            />
          </div>
          <div className="custom-button-row">
            <button className="auth-button">Save</button>
            <Link
              to={`/adoptions`}
              className="auth-button"
              style={{ textDecoration: "none" }}
            >
              Cancel 
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
