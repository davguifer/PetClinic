import jwt_decode from "jwt-decode";
import { Feature, On, feature } from "pricing4react";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap';
import tokenService from './services/token.service';

function AppNavbar() {
    const [roles, setRoles] = useState([]);
    const [username, setUsername] = useState("");
    const [plan, setPlan] = useState(null);
    const jwt = tokenService.getLocalAccessToken();
    const [collapsed, setCollapsed] = useState(true);
    const currentUser = tokenService.getUser();
    const [message, setMessage] = useState(null);



    async function setUp() {
        if (currentUser != null) {
            if (currentUser.roles[0] === "OWNER") {
                const owner = await (
                    await fetch(`/api/v1/plan`, {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    })
                ).json();
                if (owner.message)
                    setMessage(owner.message);
                else {
                    setPlan(owner.clinic.plan);
                }
            }
            if (currentUser.roles[0] === "VET") {
                const vet = await (
                    await fetch(`/api/v1/plan/vet`, {
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                        },
                    })
                ).json();
                if (vet.message)
                    setMessage(vet.message);
                else {
                    setPlan(vet.clinic.plan);
                }
            }
        }
    }


    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        if (jwt) {
            setRoles(jwt_decode(jwt).authorities);
            setUsername(jwt_decode(jwt).sub);
        }
    }, [jwt])

    useEffect(() => {
        setUp();
    }, []);

    let adminLinks = <></>;
    let ownerLinks = <></>;
    let userLinks = <></>;
    let userLogout = <></>;
    let publicLinks = <></>;

    roles.forEach((role) => {
        if (role === "ADMIN") {
            adminLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/owners">Owners</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/pets">Pets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/vets">Vets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/consultations">Consultations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/clinicOwners">Clinic Owners</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/clinics">Clinics</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/users">Users</NavLink>
                    </NavItem>
                </>
            )
        }
        if (role === "OWNER") {
            ownerLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/myPets">My Pets</NavLink>
                    </NavItem>
                    <Feature>
                        <On expression={feature("haveOnlineConsultations")}>
                            <NavItem>
                                <NavLink style={{ color: "white" }} tag={Link} to="/consultations">Consultations</NavLink>
                            </NavItem>
                        </On>
                    </Feature>
                    <Feature>
                        <On expression={feature("havePetHotel")}>
                            <NavItem>
                                <NavLink style={{ color: "white" }} tag={Link} to="/rooms">Pet Rooms</NavLink>
                            </NavItem>
                        </On>
                    </Feature>
                    <Feature>
                        <On expression={feature("havePetHotel")}>
                            <NavItem>
                                <NavLink style={{ color: "white" }} tag={Link} to="/bookings">My Bookings</NavLink>
                            </NavItem>
                        </On>
                    </Feature>
                    <Feature>
                        <On expression={feature("haveAdoptions")}>
                            <NavItem>
                                <NavLink style={{ color: "white" }} tag={Link} to="/adoptions">Adoptions</NavLink>
                            </NavItem>
                        </On>
                    </Feature>
                </>
            )
        }
        if (role === "VET") {
            ownerLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/consultations">Consultations</NavLink>
                    </NavItem>
                </>
            )
        }

        if (role === "CLINIC_OWNER") {
            ownerLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/clinics">Clinics</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/owners">Owners</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/consultations">Consultations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/vets">Vets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/rooms">Pet Rooms</NavLink>
                    </NavItem>
                </>
            )
        }
    })

    if (!jwt) {
        publicLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="ca" tag={Link} to="/ca">Customer Agreement</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="docs" tag={Link} to="/docs">Docs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="plans" tag={Link} to="/plans">Pricing Plans</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="register" tag={Link} to="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="login" tag={Link} to="/login">Login</NavLink>
                </NavItem>
            </>
        )
    } else {
        userLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} tag={Link} to="/dashboard">Dashboard</NavLink>
                </NavItem>
            </>
        )
        userLogout = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="ca" tag={Link} to="/ca">Customer Agreement</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="weather" tag={Link} to="/weather">Weather</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="animals" tag={Link} to="/animals">Dog breeds</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="docs" tag={Link} to="/docs">Docs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="plans" tag={Link} to="/plans">Pricing Plans</NavLink>
                </NavItem>
                {(currentUser.roles[0] === "OWNER" || currentUser.roles[0] === "VET") &&
                    <NavbarText style={{ color: "white" }} className="justify-content-end">{plan + "/  "}</NavbarText>
                }
                <NavbarText style={{ color: "white" }} className="justify-content-end">{username}</NavbarText>
                <NavItem className="d-flex">
                    <NavLink style={{ color: "white" }} id="logout" tag={Link} to="/logout">Logout</NavLink>
                </NavItem>
            </>
        )

    }

    return (
        <div>
            <Navbar expand="md" dark color="dark">
                <NavbarBrand href="/">
                    <img alt="logo" src="/logo1-recortado.png" style={{ height: 40, width: 40 }} />
                    PetClinic
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="ms-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="me-auto mb-2 mb-lg-0" navbar>
                        {userLinks}
                        {adminLinks}
                        {ownerLinks}
                    </Nav>
                    <Nav className="ms-auto mb-2 mb-lg-0" navbar>
                        {publicLinks}
                        {userLogout}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;