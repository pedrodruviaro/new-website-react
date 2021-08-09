import React from "react";
import { SecondaryTitle, TertiaryTitle } from "../../componets/Typography";
import illustration from "../../assets/imgs/il_send.svg";
import { SubmitStyled } from "./styles";
import { ButtonSubmit } from "../../componets/Button";
import { Link } from "react-router-dom";

export default function index() {
    return (
        <SubmitStyled>
            <SecondaryTitle>Your Message Was Sent.</SecondaryTitle>
            <TertiaryTitle> I'll respond you asap!</TertiaryTitle>
            <ButtonSubmit>
                <Link to="/">Back to home</Link>
            </ButtonSubmit>
            <img src={illustration} alt="Illustration message send" />
        </SubmitStyled>
    );
}
