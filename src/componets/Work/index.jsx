import React from "react";
import { WorkGrid, WorkStyled } from "./styles";
import {Button} from '../Button'
import { SecondaryTitle, TertiaryTitle } from "../Typography";
import { Container } from "../Containers";

import quadrado from "../../assets/imgs/quadrado.jpg";
import retangulo from "../../assets/imgs/retangulo.jpg";

export default function index() {
    return (
        <WorkStyled id="work">
            <Container padding="0 3rem 3rem 3rem">
                <SecondaryTitle>My work</SecondaryTitle>
                <TertiaryTitle>A selection of my range of work</TertiaryTitle>

                <WorkGrid>
                    <div className="work1">
                        <img src={retangulo} alt="" />
                    </div>
                    <div className="work2">
                        <img src={retangulo} alt="" />
                    </div>
                    <div className="work3">
                        <img src={quadrado} alt="" />
                    </div>
                    <div className="work4">
                        <img src={quadrado} alt="" />
                    </div>
                    <div className="work5">
                        <img src={quadrado} alt="" />
                    </div>
                </WorkGrid>

                <TertiaryTitle>You can check all of my projects in my GitHub</TertiaryTitle>
                <Button target="_blank" rel="noreferrer" href="https://github.com/pedrodruviaro">
                    Check it out!
                </Button>
            </Container>
        </WorkStyled>
    );
}
