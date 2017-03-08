import React from "react";
import {Link} from "react-router";
//this is a stateless component
export const Header = (props) => {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link activeStyle={{color:"red"}} to={"/home"}>Home</Link></li>
                            <li><Link activeClassName={"active"} to={"/user/10"}>User</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
};
