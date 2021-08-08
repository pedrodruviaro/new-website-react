import React from "react";
import { AboutStyled } from "./styles";
import { CustomTitle, Paragraph, SecondaryTitle } from "../Typography";
import { Container, ContainerSplit } from "../Containers";

export default function index() {
    return (
        <AboutStyled>
            <Container>
                <SecondaryTitle>Who I am</SecondaryTitle>
                <CustomTitle>web developer based in Brazil</CustomTitle>

                <ContainerSplit>
                    <Paragraph align="justify">
                        Chemistry graduated, currently focusing on my career
                        transition to the tech area, especially in web
                        development. Currently studying ReactJS as a way to
                        expand my range of activities, alongside CSS (specially
                        styled-components) and HTML, with some SEO involved in
                        the midle. For more information or contact, check out my
                        social links and my curriculum below.
                    </Paragraph>
                    <Paragraph align="justify">
                        In early 2021, i started my way up in the programming
                        world, always studying hard and practicing along the
                        way. You can check more about me in my Linkedin, where i
                        update frequently so all the people out there can see
                        what i'm doing and check my progress along the way.
                    </Paragraph>
                </ContainerSplit>
            </Container>
        </AboutStyled>
    );
}
