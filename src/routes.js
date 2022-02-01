
// Import Your view
import Home from "./Views/Home";
import About from "./Views/About";
import Goods from "./Views/Goods";
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
        path: "/goods",
        element: <Goods />
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