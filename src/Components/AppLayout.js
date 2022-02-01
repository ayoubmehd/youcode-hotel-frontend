import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout () {
    return (
        <>
         <div className="flex">
         <Sidebar />
        <main className="flex w-full">
         
         <Outlet />
        </main>
        </div>
          </>


    );
}

export default AppLayout ;