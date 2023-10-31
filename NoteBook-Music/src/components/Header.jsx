import { isUserLoggedIn, logOut } from "../services/AuthService";

export default function Header() {
    //const navigator = useNavigate();
    function handleLogout() {
        logOut();
    }
    return (
        <div className="header">
            <p className="header-logo">Notepad</p>
            {isUserLoggedIn() && <div className="logout" onClick={handleLogout}>Logout</div>}
        </div>
    )

}