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
                        <TertiaryTitle>Web Development</TertiaryTitle>
                        <Paragraph>
                            Currently working with React to build web apps and SPA's. At
                            the same time, I've already started my way in the
                            back-end world with NodeJS to integrate my work and
                            build more amazing projects.
                        </Paragraph>
                    </div>

                    <div>
                        <TertiaryTitle>Softskills</TertiaryTitle>
                        <Paragraph>
                            Some of the most important (and negligencied) parts
                            about the tech job is the social skills and know how
                            to work as a team. I consider myself a good and
                            chill person to work with, always trying to improve
                            the overall spirit at the work enviroment.
                        </Paragraph>
                    </div>

                    <div>
                        <TertiaryTitle>React JS</TertiaryTitle>
                        <Paragraph>
                            At the moment i'm learning more and more about these
                            awesome framework, building some projects to refine
                            my skills along the way. Have a good understanding
                            of libraries, such as Material UI.
                        </Paragraph>
                    </div>
                </ContainerSplit>

                <Button href="#work">my work</Button>
            </Container>
        </MyServicesStyled>
    );
}
