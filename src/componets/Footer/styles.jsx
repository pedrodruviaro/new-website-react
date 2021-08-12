import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: ${props => props.theme.clrDark};
    color: ${props => props.theme.clrLight};
    border-top: 2px solid ${props => props.theme.clrAccent};

    img {
        width: 120px;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        font-size: 1.125rem;
        padding: .5rem;
        transition: all 300ms ease-in-out;

        &:after {
            content: "|";
            color: ${props => props.theme.clrAccent};
        }
    
        &:before {
            content: "|";
            color: ${props => props.theme.clrAccent};
        }

        &:hover {
            transform: scale(1.1);
        }

        &:hover svg {
            color: ${props => props.theme.clrAccent};
            opacity: .9;
        }

        svg {
            transition: all 300ms ease-in-out;
        }
    }


    p {
        opacity: .8;
        font-size: .8rem;
    }


    @media(min-width: 400px){
        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`