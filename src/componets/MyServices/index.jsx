import React from "react";
import { MyServicesStyled } from "./styles";
import { Paragraph, SecondaryTitle, TertiaryTitle } from "../Typography";
import { Container, ContainerSplit } from "../Containers";
import { Button } from "../Button";

export default function index(props) {
    return (
        <MyServicesStyled id="services">
            <Container>
                <SecondaryTitle>What I do</SecondaryTitle>
                <ContainerSplit>
                    <div>
                        <TertiaryTitle>React</TertiaryTitle>
                        <Paragraph>
                            Currently working with React and Styled-Components
                            to build web apps and SPA's. At the same time,
                            constantly studying to refine my skills with this
                            awesome framework. Besides, have a good
                            understanding of libraries, such as Material UI.
                        </Paragraph>
                    </div>

                    <div>
                        <TertiaryTitle>Softskills</TertiaryTitle>
                        <Paragraph>
                            Some of the most important (and negligencied) parts
                            about the tech job is the social skills and know how
                            to develop as a team. I consider myself a good and
                            chill person to work with, always trying to improve
                            the overall spirit at the work enviroment.
                        </Paragraph>
                    </div>

                    <div>
                        <TertiaryTitle>Node.js</TertiaryTitle>
                        <Paragraph>
                            At the moment, I've already started my way on the
                            backend, studying the world of Node.js to integrate
                            in my work and build more complex projects. I'm
                            currently in the initial steps, but always studying
                            and improving to become a complete full stack
                            developer.
                        </Paragraph>
                    </div>
                </ContainerSplit>

                <Button margin="4rem auto 0 auto" href="#work">
                    my work
                </Button>
            </Container>
        </MyServicesStyled>
    );
}
