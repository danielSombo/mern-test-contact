// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthView from "../Views/AuthView";
import MainView from "../Views/MainView";

const RouterView = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthView />} />
                <Route path="/contact-admin-page" element={<MainView />} />
            </Routes>
        </Router>
    );
};

export default RouterView;