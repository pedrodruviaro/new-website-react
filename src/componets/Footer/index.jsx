import React from "react";
import logo from "../../assets/imgs/logo.svg";
import { FooterStyled } from "./styles";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelopeOpenText,
    FaRegListAlt
} from "react-icons/fa";
import { FlexContainer } from "../Containers";
import { Link } from "react-router-dom";

export default function index() {
    return (
        <FooterStyled id="footer">
            <FlexContainer
                direction="column"
                align="center"
                padding="3rem 1.5rem"
                gap="1.5rem"
            >
                <nav>
                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://github.com/pedrodruviaro">
                                <FaGithub />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pedro-henrique-dalmolin-ruviaro-4b4a00209/">
                                <FaLinkedinIn />
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pedrodalmolin/">
                                <FaInstagram />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <Link to="/curriculum">
                                <FaRegListAlt />
                                Curriculum
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <FaEnvelopeOpenText />
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <FlexContainer align="center" gap="2rem"> 
                    <img src={logo} alt="" />
                    <p>&copy; Copyright 2021</p>
                </FlexContainer>
            </FlexContainer>
        </FooterStyled>
    );
}
