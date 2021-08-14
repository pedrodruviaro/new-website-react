import styled from "styled-components";

import pattern from "../../assets/imgs/pattern.svg";

export const HeroStyled = styled.div`
    /* background-image: url(${pattern}), radial-gradient(#49494984, #5e317099);
background-attachment: fixed;
background-blend-mode: multiply;
background-position: center;
background-size: contain cover;
background-repeat:repeat repeat; */

    height: calc(100vh - 88px);
    background: linear-gradient(to top, #2e1b36, #03051f);

    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding: 1.5rem;

`;

export const HeroTitle = styled.h1`
    font-weight: 200;
    font-size: 4rem;

    @media (min-width: 900px) {
        font-size: 5rem;
    }
`;

export const HeroSubtitle = styled.h2`
    font-weight: 400;
    font-size: 2.5rem;

    @media (min-width: 900px) {
        font-size: 3.5rem;
    }
`;
