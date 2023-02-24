import React from "react";
import LogoGo from "../Assets/logoGo.svg";

export const NavbarUser = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
            <div className="container-fluid">
                <img
                    className="ms-md-5"
                    src={LogoGo}
                    alt="Ganesha Operation"
                />
                <div id="navbarNav"></div>
            </div>
        </nav>
    );
};
