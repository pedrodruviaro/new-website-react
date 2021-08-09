import React from "react";
import { TertiaryTitle } from "../../componets/Typography";
import { CurriculumStyled } from "./styles"
import {FlexContainer} from '../../componets/Containers'
import illustration from '../../assets/imgs/il_work_in_progress.svg'

export default function index() {
    return (
        <CurriculumStyled>
            <FlexContainer direction="column" gap="2rem" padding="4rem">
            <TertiaryTitle>Work in progress... Come back later.</TertiaryTitle>
            <img src={illustration} alt="Illustration work in progress" />
            </FlexContainer>
        </CurriculumStyled>
    );
}
