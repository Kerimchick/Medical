import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "./logo-medical.png"
import avatar from "./avatar.jpg"

const Layout = ({children}) => {
    return (
        <main className="main">
            <aside className="aside">
                <div>
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/tasks">Tasks ans works</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/calendar">Calendar</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/possibilities">Possibilities</NavLink>
                    </li>
                </ul>
            </aside>
            <div className="right-side">
                <header className="header">
                    <img src={avatar} alt="avatar" className="avatar"/>
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;