import styled from "styled-components";


//color: hsl(317 100% 54%);

export const GlowButton = styled.a`


    font-size: 2rem;
    font-weight: 600;

    margin: 3rem auto 0 auto;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: hsl(317 100% 54%);
    border: .125em solid hsl(317 100% 54%);
    padding: .5em 1em;
    position: relative;
    border-radius: .25em;

    text-shadow: 
    0 0 .125em hsl(0 0% 100% / .3),
    0 0 .45em currentColor;

    box-shadow: inset 0 0 .5em hsl(317 100% 54%), 0 0 .5em 0 hsl(317 100% 54%);

    transition: background-color 100ms linear;

    &::before {
        pointer-events: none;
        content: "";
        position: absolute;
        background: hsl(317 100% 54%);
        top: 120%;
        left: 0;
        width: 100%;
        height: 100%;

        transform: perspective(1em) rotateX(50deg) scale(1, 0.35);
        filter: blur(1.5em);
        opacity: .7;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 2em .5em hsl(317 100% 54%);
        opacity: 0;
        transition: opacity 100ms linear;
    }

    &:hover,
    &:focus {
        background-color: hsl(317 100% 50%);
        color: ${props => props.theme.clrDark};
        text-shadow: none;


        outline: none;
    }


    &:hover::before,
    &:focus::before {
       opacity: 1; 
    }


    &:hover::after,
    &:focus::after {
        opacity: 1;
    }

`
