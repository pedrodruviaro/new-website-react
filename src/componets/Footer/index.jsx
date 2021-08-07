import React from "react";
import logo from "../../assets/imgs/logo.svg";
import { FooterStyled } from "./styles";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelopeOpenText,
} from "react-icons/fa";
import { FlexContainer } from "../FlexContainer";

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
                            <a href="">
                                <FaGithub />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaLinkedinIn />
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaInstagram />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaEnvelopeOpenText />
                                Contact
                            </a>
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
