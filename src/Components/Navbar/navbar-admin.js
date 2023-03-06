import React from "react";
import LogoGo from "'../Assets/logoGo.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADMIN_LOGOUT } from "../Redux/Constanst";
import axios from "axios";
import Directory from "../baseDirectory";
import url from "../baseUrl";
import "./NavbarAdmin.css";

const NavbarAdmin = () => {
    // const dispatch = useDispatch();

    const handleLogout = async () => {
        // try {
        //     await axios.get(`${url}/logout`);
        //     localStorage.removeItem("LoginSdm");
        //     dispatch({
        //         type: ADMIN_LOGOUT,
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
            <div className="container-fluid">
                <NavLink to={`/${Directory}/list_peserta`}>
                    <img src={LogoGo} alt="Ganesha Operation" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to={`/${Directory}/list_peserta`}
                        >
                            List Peserta
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to={`/${Directory}/list_karyawan`}
                        >
                            List Karyawan
                        </NavLink>
                        <button
                            className="btn fw-bolder ms-3 warnaButton"
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                handleLogout();
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarAdmin;
