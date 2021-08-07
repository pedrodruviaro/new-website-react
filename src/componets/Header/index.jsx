import React from "react";
import { Hamburger, HeaderStyled, MenuNavHeader } from "./styles";
import logo from "../../assets/imgs/logo.svg";

export default function Index(props) {


    return (
        <HeaderStyled>
            <a href="">
                <img src={logo} alt="" />
            </a>

            <MenuNavHeader>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="">My Services</a>
                    </li>
                    <li>
                        <a href="">Aboute me</a>
                    </li>
                    <li>
                        <a href="">My Work</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
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
