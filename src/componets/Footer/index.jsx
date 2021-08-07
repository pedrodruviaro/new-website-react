import React from 'react'
import logo from "../../assets/imgs/logo.svg";
import { FooterStyled } from './styles';

export default function index() {
    return (
        <FooterStyled id="footer">

            <nav>
                <ul>
                    <li>
                        <a href="">GitHub</a>
                    </li>
                    <li>
                        <a href="">Linkedin</a>
                    </li>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>

            <img src={logo} alt="" />
            <p>&copy; Copyright 2021</p>
        </FooterStyled>
    )
}
