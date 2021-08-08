import React from "react";
import { Hamburger, HeaderStyled, MenuNavHeader } from "./styles";
import logo from "../../assets/imgs/logo.svg";
import { FlexContainer } from "../Containers";
import { Link } from "react-router-dom";

export default function Index(props) {
    return (
        <HeaderStyled>
            <FlexContainer align="center" justify="space-between">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>

                <MenuNavHeader>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/curriculum">Curriculum</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
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
