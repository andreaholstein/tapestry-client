// -------------- FXNALITY --------------
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// -------------- STYLES --------------
import './LoginModal.scss'


const LoginModal = () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    // const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post(`${API_BASE_URL}/users/login`, {
                email,
                password,
            });
            localStorage.setItem("authToken", data.authToken);
            // navigate("/");
        } catch (err) {
            if (err.code === "ECONNABORTED") {
                setError("API request timed out");
            } else {
                setError(err.response?.data?.message || "Login failed");
            }
        }
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <h2 className="login__title">Login</h2>
                {error && <p className="login__error">{error}</p>}
                <input
                    type="email"
                    className="login__input"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <button type="submit" className="login__button">
                    Login
                </button>
            </form>
        </div>
    )
};

export default LoginModal;