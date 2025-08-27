import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="bg-gray-900 h-11 flex text-white px-6 py-2 
                        justify-between align-center shadow-md text-xl font-bold">
            <div>
                <Link to="/home">MOVIELIST</Link>
            </div>
            <div className="flex flex-row gap-7">
                <NavLink to="/watchlist" className={({isActive}) => isActive ? "hover:text-red-600" : " hover:text-red-600"}>WatchList</NavLink>
                <NavLink to="/home" className={({isActive}) => isActive ? "hover:text-red-600" : " hover:text-red-600"}>Home</NavLink>
            </div>
        </nav>
    )
}
export default NavBar;