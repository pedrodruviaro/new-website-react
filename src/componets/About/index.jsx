import React from "react";
import { AboutStyled, Split } from "./styles";
import { CustomTitle, Paragraph, SecondaryTitle } from "../Typography";
import { Container } from "../Containers";

import coder from "../../assets/imgs/il_code.svg";
import chart from "../../assets/imgs/il_chart.svg";
import { useHistory } from "react-router-dom";

export default function Index() {

    const history = useHistory()

    return (
        <AboutStyled id="about">
            <Container>
                <SecondaryTitle>Who I am</SecondaryTitle>
                <CustomTitle>web developer based in Brazil</CustomTitle>

                <Split direction="row" tabIndex="0">
                    <Paragraph align="justify">
                        Chemistry graduated, currently focusing on my career
                        transition to the tech area, especially in web
                        development. Currently studying ReactJS as a way to
                        expand my range of activities, alongside CSS (specially
                        styled-components) and HTML, with some back-end
                        involving NodeJS in the midle. For more information or
                        contact, check out my social links below and my
                        curriculum.
                    </Paragraph>
                    <img src={chart} alt="" />
                </Split>
                <Split direction="row-reverse" tabIndex="0">
                    <Paragraph align="justify">
                        In early 2021, i started my way up in the programming
                        world, always studying hard and practicing along the
                        way. You can check more about me in my Linkedin, where i
                        update frequently so all the people out there can see
                        what i'm doing and check my progress along the way. If
                        you like to chat, click <button onClick={() => history.push("/contact")}>here</button> to send me a cool message!
                    </Paragraph>
                    <img src={coder} alt="" />
                </Split>
            </Container>
        </AboutStyled>
    );
}
