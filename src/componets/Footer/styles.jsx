import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: ${props => props.theme.clrDark};
    color: ${props => props.theme.clrLight};
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
        width: 150px;
        margin: 1.5rem auto;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    a {
        padding: .5rem;
    }

    p {
        opacity: .8;
        font-size: .8rem;
    }


    @media(min-width: 600px){
        ul {
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }
`