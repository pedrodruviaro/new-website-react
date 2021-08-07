import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* general styles */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color:  ${props => props.theme.clrBgBody};
    color:  ${props => props.theme.clrDark};
    margin: 0;
    font-family:  ${props => props.theme.fontPrimary};
    font-size:  ${props => props.theme.fsbody};
    line-height: 1;
}

section {
    padding: 5em 2em;
}

img {
    display: block;
    max-width: 100%;
}

:focus {
    outline: 3px solid  ${props => props.theme.clrAccent};
    outline-offset: 3px;
}

.btn {
    display: inline-block;
    background-color: ${props => props.theme.clrAccent};
    color:  ${props => props.theme.clrLight};
    border: none;
    border-radius: 5px;
    padding: 1em 2.5em;
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight:  ${props => props.theme.weigthBold};
    cursor: pointer;
    position: relative;
    transition: transform 300ms ease-in-out,
                box-shadow 300ms ease-in;
    
    box-shadow: rgba(241, 241, 241, 0.2) 0px 7px 29px 0px;
}

button:hover,
button:focus {
    transform: scale(1.1);
    box-shadow: none;
    opacity: .9;
}


/* typography */
h1,
h2,
h3 {
    line-height: 1.1;
    margin: 0;
}

h1 {
    font-size: ${props => props.theme.fsh1};
}

h2 {
    font-size:  ${props => props.theme.fsh2};
}

h3 {
    font-size:  ${props => props.theme.fsh3};
}

p {
    line-height: 1.5;
}

.section__title {
    margin-bottom: .25em;
}

.section__subtitle {
    margin: 0;
    font-size:  ${props => props.theme.fsh3};
}


`;



// @media (min-width: 800px) {
//         --fs-h1: 4.5rem;
//         --fs-h2: 3.75rem;
//         --fs-h3: 1.5rem;
//         --fs-body: 1.125rem;
// }
