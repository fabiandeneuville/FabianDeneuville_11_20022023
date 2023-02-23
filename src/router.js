import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Accomodation from "./pages/Accommodation"
import About from "./pages/About";
import NotFound from "./pages/404";

const router = createBrowserRouter([
    {
        path: "/",
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
    {
        path: "/not-found",
        element: <NotFound/>
    }
]);

export default router;