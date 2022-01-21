
// Import Your view
import Home from "./Views/Home";
import About from "./Views/About";
import Reservations from "./Views/Reservations";

const NotFound = () => (<h1>404 Not Found</h1>);

export default [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/reservations",
        element: <Reservations />
    },
    /**
     * add your route like
     * 
     * {
     *     path: "/your-path",
     *     element: <Your View />
     * },
     */
    {
        path: "*",
        element: <NotFound />
    },
];