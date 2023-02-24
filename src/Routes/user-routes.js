import React from "react";
import { Routes, Route } from "react-router-dom";

import TesDisc from "../pages/user/TesDisc";
import TesMbti from "../pages/user/TesMbti";
import TesKetelitian from "../pages/user/TesKetelitian";
import TesTkd from "../pages/user/TesTkd";

const UserRoute = () => {
    return (
        <Routes>
            <Route path={`/tes_disc/:token`} element={<TesDisc />} />
            <Route path={`/tes_mbti/:token`} element={<TesMbti />} />
            <Route path={`/tes_tkd/:token`} element={<TesTkd />} />
            <Route
                path={`/tes_ketelitian/:token`}
                element={<TesKetelitian />}
            />
        </Routes>
    );
};

export default UserRoute;
