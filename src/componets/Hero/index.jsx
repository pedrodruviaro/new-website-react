import React from "react";
import { Button } from "../Button";
import { HeroStyled, HeroSubtitle, HeroTitle } from "./styles";

export default function index() {
  return (
    <HeroStyled>
      <HeroTitle>welcome.</HeroTitle>
      <HeroSubtitle>know more about me</HeroSubtitle>
      <Button href="#home">Start the tour</Button>
    </HeroStyled>
  );
}
