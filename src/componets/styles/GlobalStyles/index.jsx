import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* general styles */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: ${props => props.fontPrimary};
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
    padding: 4em 2em;
}

img {
    display: block;
    max-width: 100%;
}

:focus {
    outline: 3px solid  ${props => props.theme.clrAccent};
    outline-offset: 3px;
}
`;



// @media (min-width: 800px) {
//         --fs-h1: 4.5rem;
//         --fs-h2: 3.75rem;
//         --fs-h3: 1.5rem;
//         --fs-body: 1.125rem;
// }
