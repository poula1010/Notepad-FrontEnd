import { getLoggedInUser, isUserLoggedIn, logOut } from "../services/AuthService";

export default function Header() {
    //const navigator = useNavigate();
    const userToken = getLoggedInUser();

    function handleLogout() {
        logOut();
    }
    return (
        <div className="header">
            <p className="header-logo">Notepad</p>
            <div className="header-right">
                {userToken === "selvia" && <div className="header-right">
                    <span className="wewee">Love you weweee
                    </span><img className="heart" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Wiki_Eurovision_Heart_%28Infobox%29.svg" /></div>}
                {isUserLoggedIn() && <div className="logout" onClick={handleLogout}>Logout</div>}
            </div>

        </div>
    )

}