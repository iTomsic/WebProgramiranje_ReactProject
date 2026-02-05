import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Auth.css";

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(formData.username, formData.email, formData.password);

        navigate("/login");
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Create Account</h1>
                <p className="auth-subtitle">Sign up to get started</p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                            placeholder="Enter password"
                        />
                    </div>

                    <button className="auth-button" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
