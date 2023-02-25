import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Accomodation from "./pages/Accommodation"
import About from "./pages/About";
import NotFound from "./pages/404";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children : [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/a-propos",
                element: <About/>,
            },
            {
                path: "/fiche-hebergement/:id",
                element: <Accomodation/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ]
    }
]);

export default router;