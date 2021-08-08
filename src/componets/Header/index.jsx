import React from "react";
import { Hamburger, HeaderStyled, MenuNavHeader } from "./styles";
import logo from "../../assets/imgs/logo.svg";
import { FlexContainer } from "../Containers";

export default function Index(props) {
    return (
        <HeaderStyled>
            <FlexContainer align="center" justify="space-between">
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
            </FlexContainer>
        </HeaderStyled>
    );
}
