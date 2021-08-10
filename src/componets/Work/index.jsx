import React from "react";
import { CardWork, PortlofioFlex, WorkStyled } from "./styles";
import { Button, ButtonLine } from "../Button";
import { Paragraph, SecondaryTitle, TertiaryTitle } from "../Typography";
import { Container } from "../Containers";

import work1 from "../../assets/works/formatado1.png";
import work2 from "../../assets/works/formatado2.jpeg";
import work3 from '../../assets/works/work5.jfif'
import worknode from "../../assets/works/nodejs.png";

export default function index() {
    return (
        <WorkStyled id="work">
            <Container>
                <SecondaryTitle>My work</SecondaryTitle>
                <TertiaryTitle>A selection of my range of work</TertiaryTitle>

                <PortlofioFlex>
                    <CardWork>
                        <Paragraph>
                            Knowledge in developing SPA's with React.
                            Application styling with traditional CSS, experience
                            using libraries like Material UI and experience with
                            Styled-Components.
                            <ButtonLine tabIndex="0" margin="2rem auto" target="_blank" rel="noreferrer" href="https://github.com/pedrodruviaro/notes-materialUI-REACT">
                                View Code
                            </ButtonLine>
                        </Paragraph>
                        <img src={work1} alt="Work 1" />
                    </CardWork>

                    <CardWork direction="row-reverse">
                        <Paragraph>
                            Component development with focus in CSS, as well as
                            Landing Pages and static websites with JavaScript.
                            <ButtonLine tabIndex="0" margin="2rem auto" target="_blank" rel="noreferrer" href="https://github.com/pedrodruviaro/front-end-menthor-projects/tree/main/pricing-component-with-toggle-master">
                                View Code
                            </ButtonLine>
                        </Paragraph>
                        <img src={work2} alt="Work 2" />
                    </CardWork>

                    <CardWork>
                        <Paragraph>
                            I work and study constantly to improve actions
                            involving forms (controlled and uncontrolled) and
                            data in React, for better user interaction with the
                            SPA.
                            <ButtonLine tabIndex="0" margin="2rem auto" target="_blank" rel="noreferrer" href="https://github.com/pedrodruviaro/formulario-cadastro-React">
                                View Code
                            </ButtonLine>
                        </Paragraph>
                        <img src={work3} alt="Work 3" />
                    </CardWork>

                    <CardWork direction="row-reverse">
                        <Paragraph>
                            Currently, in addition to front-end studies, my
                            focus has been on learning back-end concepts and
                            api's creation, mainly using NodeJS and relational
                            and non-relational databases.
                            <ButtonLine tabIndex="0" margin="2rem auto" href="https://github.com/pedrodruviaro/first-api__study" target="_blank" rel="noreferrer">
                                View Code
                            </ButtonLine>
                        </Paragraph>
                        <img src={worknode} alt="Work 4" />
                    </CardWork>
                </PortlofioFlex>

                <TertiaryTitle>
                    You can check all of my projects in my GitHub
                </TertiaryTitle>
                <Button
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/pedrodruviaro"
                    margin="2rem auto 0 auto"
                >
                    Check it out!
                </Button>
            </Container>
        </WorkStyled>
    );
}
