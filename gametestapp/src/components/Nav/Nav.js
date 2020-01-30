import React from "react";
import "../Nav/navstyle.css";

function Nav() {
    return (
        <div className="navparentdiv">
            <div className="main-nav">
                <ul className="nav-names">
                    <li><a href="/">Home</a></li>
                    <li><a href="/play/quiz">Game Page</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;