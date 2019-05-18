import React from "react";
import "./navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
            <li className="label">Test Your Memory</li>
            <li className="center"></li>
            {/* <li className="score">Score: {this.props.score}</li> */}
        </ul>
    </nav>
);

export default Navbar;
