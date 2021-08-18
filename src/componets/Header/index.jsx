import React from "react";
import { Hamburger, HeaderStyled, MenuNavHeader } from "./styles";
import logo from "../../assets/imgs/logo.svg";
import { Link } from "react-router-dom";

export default function Index(props) {
    const links = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Curriculum",
            path: "/curriculum",
        },
        {
            label: "Articles",
            path: "/articles",
        },
        {
            label: "Contact",
            path: "/contact",
        },
    ];

    return (
        <HeaderStyled>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>

            <MenuNavHeader>
                <ul>
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </MenuNavHeader>

            <Hamburger
                sidebarOpen={props.sidebarOpen}
                onClick={props.handleSidebarOpen}
            >
                <div className="line"></div>
            </Hamburger>
        </HeaderStyled>
    );
}
