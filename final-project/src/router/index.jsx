import React from 'react';
import {Route, Routes} from "react-router-dom";
import {BaseLayout} from "../components/layout/BaseLayout.jsx";
import {Home} from "../pages/index.js";

export const Router = () => {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <BaseLayout>
                        <Home />
                    </BaseLayout>
                }
            />
            <Route
                exact
                path = "*"
                element={<h1>ERROR</h1>}/>
        </Routes>
    );
};