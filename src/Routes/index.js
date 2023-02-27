import React from "react";
import Directory from "../baseDirectory";
import { Routes, Route } from "react-router-dom";

import UserRoute from "./user-routes";
import Blank from "../pages/Blank";

const Router = () => {
    return (
        <Routes>
            <Route path={`/${Directory}`} element={<Blank />} />
            <Route path={`/${Directory}/*`} element={<UserRoute />} />
            <Route path={`/${Directory}/*`} element={<Blank />} />
            <Route path={`/${Directory}/*`} element={<Blank />} />
        </Routes>
    );
};

export default Router;
