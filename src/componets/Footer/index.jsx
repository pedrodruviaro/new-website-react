import React from "react";
import logo from "../../assets/imgs/logo.svg";
import { FooterStyled } from "./styles";
import {
    FaGithub,
    FaLinkedinIn,
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
                padding="4rem 1.5rem 3rem 1.5rem"
                gap="2rem"
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

                <FlexContainer align="center" gap="2rem" padding="0rem"> 
                    <img src={logo} alt="" />
                    <p>&copy; Copyright 2021</p>
                </FlexContainer>
            </FlexContainer>
        </FooterStyled>
    );
}
