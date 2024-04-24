
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../asset/images/logo.png";
const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");
    console.log("anchortoken", token);
    function Logout() {
        localStorage.removeItem("token");
        alert('You are logout');
        navigate("/login");
    }

    function signup() {
        navigate("/signup");
    }

    function login() {
        navigate("/login");
    }

    function home() {
        navigate("/");
    }

    function allemployees() {
        token ? navigate("/allemployees") : navigate("/login");
    }


    return (
        <header className="NewNavbar_nav_cont_dark__jxRzF head" style={{ display: "flex" }}>
            <nav className="NewNavbar_nav_block__Kt2BG">
                <div>
                    <button className="imgLink" onClick={home}>
                        <img alt="logo" loading="lazy" width="80" height="70" decoding="async" data-nimg="1"
                            style={{ color: "transparent", marginTop: "8px", paddingTop: "2px" }}
                            src={logo} />
                    </button>
                </div>
                <div className="nav__menu-bar" onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="nav__menu-list">
                    <div>
                        <button className="nav__link" target="_blank" style={{ color: "black" }}
                            onClick={home} rel="noreferrer">MakeMyWeb.</button>
                    </div>
                    <div>
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/signup" style={{ color: "black" }}>Signup
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/login" style={{ color: "black" }}>Login
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to={token ? "/allemployees" : "/login"} style={{ color: "black" }}>Allemployee
                        </Link>
                    </div>
                    <div>
                        <button className="nav__link" style={{ color: "black" }} onClick={Logout}>Logout</button>
                    </div>
                    <button className="themeBtn" style={{ display: "flex" }}>
                        <span></span>
                    </button>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;