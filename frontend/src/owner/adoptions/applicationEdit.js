import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Label } from "reactstrap";
import tokenService from "../../services/token.service";
import getErrorModal from "../../util/getErrorModal";
import getIdFromUrl from "../../util/getIdFromUrl";
import useFetchState from "../../util/useFetchState";

const jwt = tokenService.getLocalAccessToken();
const currentUser = tokenService.getUser();


export default function ApplicationEdit() {
  const emptyItem = {
    id: null,
    owner: null,
    pet: null,
    description: null,
    adopter: null,
    application: null
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

  const [adopter,setAdopter] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/owners/user/${currentUser.id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        setAdopter(data);
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
    const inputApplication = event.target.application.value;
    const adoptionToSend = { 
        ...adoption, 
        adopter,
        application: inputApplication
      };
    fetch("/api/v1/adoptions/" + (adoption.id), {
      method: "PUT",
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

  return (
    <div className="auth-page-container">
      {<h2>Apply for adoption of pet: <br /> </h2>}
      <div className="auth-form-container">
        {adoption.pet && <h2 style={{ fontFamily: 'american-typewriter', fontSize: '18px', textAlign: 'center',color:'#2E8B57' }}>
          Name: {adoption.pet.name}<br /> Type: {adoption.pet.type.name}</h2>}
        {modal}
      <Form onSubmit={handleSubmit}>
          <div className="custom-form-input">
            <Label for="request" className="custom-form-input-label">
                Request
            </Label>
            <Input
              type="text"
              required
              name="application"
              id="application"
              value={adoption.application || ""}
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
