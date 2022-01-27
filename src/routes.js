// Import Your view
import Home from "./Views/Home";
import About from "./Views/About";
import Reservations from "./Views/Reservations";
import NewReservation from "./Views/NewReservation";
import { useRoutes } from "react-router-dom";
import Customers from "./Views/Customers";
import Reservation from "./Views/Reservation";

const NotFound = () => <h1>404 Not Found</h1>;

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/reservations",
      element: <Reservations />,
      children: [],
    },
    {
      path: "/reservations/new",
      element: <Reservation />,
      children: [
        {
          path: "",
          element: <NewReservation />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
      ],
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
      element: <NotFound />,
    },
  ]);
}

export default Routes;
