import React from "react";
import { GlowButton } from "../GlowButton";
import { HeroStyled, HeroSubtitle, HeroTitle } from "./styles";

export default function index() {
    return (
        <HeroStyled>
            <HeroTitle>welcome.</HeroTitle>
            <HeroSubtitle>know more about me</HeroSubtitle>
            <GlowButton href="#home">Start</GlowButton>
        </HeroStyled>
    );
}
