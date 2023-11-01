import { getToken, isUserLoggedIn, logOut } from "../services/AuthService";

export default function Header() {
    //const navigator = useNavigate();
    const userToken = getToken();
    function handleLogout() {
        logOut();
    }
    return (
        <div className="header">
            <p className="header-logo">Notepad</p>
            <div className="header-right">
                {userToken === "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzZWx2aWEiLCJpYXQiOjE2OTg4NzcwNzUsImV4cCI6MTY5OTQ4MTg3NX0.L9MmF6rcS_zCuTCnoqIHUjwCQ16VM3RvfEVgS7ef6AcqlzwYE901ZwbQvr0RVIDG" && <div>
                    <span className="wewee">Love you weweee
                    </span><img className="heart" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Wiki_Eurovision_Heart_%28Infobox%29.svg" /></div>}
                {isUserLoggedIn() && <div className="logout" onClick={handleLogout}>Logout</div>}
            </div>

        </div>
    )

}