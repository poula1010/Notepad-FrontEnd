import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function RegisterForm() {
    const [formData, setFormData] = useState({ name: "", username: "", password: "", email: "" });

    function handleFormChange(e) {

        setFormData(prev => {
            return (
                { ...prev, [e.target.name]: e.target.value }
            );
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className="form-centerer">
            <div className="form-container">
                <div className="form-header">
                    <h1>Register</h1>
                </div>
                <br></br>
                <div className="form-body">
                    <form className="form-body">
                        <input className="input-text" type="text" name="name" placeholder="Name" onChange={handleFormChange} value={formData.name}></input>
                        <input className="input-text" type="text" name="username" placeholder="Username" onChange={handleFormChange} value={formData.username}></input>
                        <input className="input-text" type="text" name="email" placeholder="Email" onChange={handleFormChange} value={formData.email}></input>
                        <input className="input-text" type="password" name="password" placeholder="Password" onChange={handleFormChange} value={formData.password}></input>

                        <button className="submit-btn" onClick={handleSubmit}>Login</button>
                    </form>
                </div>
                <div className="form-tail">
                    <span className="register-span">Already have an account? </span>
                    <NavLink to="/login" className="register-link"> Login here</NavLink>
                </div>
            </div >
        </div>
    )
}