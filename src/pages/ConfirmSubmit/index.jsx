import React from "react";
import { SecondaryTitle, TertiaryTitle } from "../../componets/Typography";
import illustration from "../../assets/imgs/il_send.svg";
import { SubmitStyled } from "./styles";
import { ButtonSubmit } from "../../componets/Button";
import { useHistory } from "react-router-dom";

export default function Index() {

    const history = useHistory()

    return (
        <SubmitStyled>
            <SecondaryTitle>Your Message Was Sent.</SecondaryTitle>
            <TertiaryTitle> I'll respond you asap!</TertiaryTitle>
            <ButtonSubmit onClick={() => history.push("/")}>
                Back to home
            </ButtonSubmit>
            <img src={illustration} alt="Illustration message send" />
        </SubmitStyled>
    );
}
