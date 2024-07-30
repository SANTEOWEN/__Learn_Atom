import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = ({isLogged}) => {
    return (
        <>
            <nav>
                <Link to={"/"} className="logo-nav">Git Explorer</Link>
                <div className="link-cont">
                    <Link to={"/"}>Repos</Link>
                    <Link to={"/users"}>Users</Link>
                    <Link to={"/search"}>Search</Link>
                    <Link to={"/authprofile"}>Profile</Link>
                    {!isLogged && <Link to={"/login"}>Login</Link>}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
