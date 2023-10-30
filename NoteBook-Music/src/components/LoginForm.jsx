import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { loginAPICall, storeToken } from "../services/AuthService";

export default function LoginForm() {
    const [formData, setFormData] = useState({ usernameOrEmail: "", password: "" });
    const navigator = useNavigate();
    function handleFormChange(e) {

        setFormData(prev => {
            return (
                { ...prev, [e.target.name]: e.target.value }
            );
        })
    }
    function handleSubmit(e) {
        e.preventDefault();


        loginAPICall(formData).then(response => {
            console.log(response.data);
            const token = response.data.accessToken;
            storeToken("Bearer " + token);
            navigator("/main")
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="form-centerer">
            <div className="form-container">
                <div className="form-header">
                    <h1>Login</h1>
                </div>
                <br></br>
                <div className="form-body">
                    <form className="form-body">
                        <input className="input-text" type="text" name="usernameOrEmail" placeholder="Username or Email" onChange={handleFormChange} value={formData.usernameOrEmail}></input>


                        <input className="input-text" type="password" name="password" placeholder="Password" onChange={handleFormChange} value={formData.password}></input>
                        <button className="submit-btn" onClick={handleSubmit}>Login</button>
                    </form>
                </div>
                <div className="form-tail">
                    <span className="register-span">Dont have an account </span>
                    <NavLink to="/register" className="register-link"> register here</NavLink>
                </div>
            </div >
        </div>
    )
}