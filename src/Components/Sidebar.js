import { Link } from "react-router-dom";
import user from "../assets/icons/user.svg";
import logout from "../assets/icons/logout.svg";

function Sidebar() {
    return (
        <div className="flex md:flex-col justify-between items-center w-full md:w-28 py-6 h-15 md:h-screen bg-purple-600 text-center text-white bottom-0 absolute md:static">
            <div className="md:w-full mx-1 md:mx-0 flex md:flex-col items-center">
                <img className="md:w-1/2" src={user} alt="User icon" />
                <span className="px-1 md:p-0">
                    Username
                </span>
            </div>

            <ul className="flex md:block">
                <li>
                    <Link className="inline-block px-2 md:p-0 md:py-3" to="/goods">Goods</Link>
                </li>
                <li>
                    <Link className="inline-block px-2 md:p-0 md:py-3" to="/users">Users</Link>
                </li>
                <li>
                    <Link className="inline-block px-2 md:p-0 md:py-3" to="/reservations">Reservations</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <button className="flex items-center">
                        Logout
                        <img className="mx-1 -mb-0.5 w-6" src={logout} alt="Logout button" />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;