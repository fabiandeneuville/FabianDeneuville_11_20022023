import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Accomodation = React.lazy(() => import("./pages/Accommodation"));
const About = React.lazy(() => import("./pages/About"));
const NotFound = React.lazy(() => import("./pages/404"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/a-propos",
        element: <About/>
    },
    {
        path: "/fiche-hebergement/:id",
        element: <Accomodation/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

export default router;