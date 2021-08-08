import styled from "styled-components";

export const FooterStyled = styled.footer`
    /* background-color: ${props => props.theme.clrDark};
    color: ${props => props.theme.clrLight};
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: center; */
    background-color: ${props => props.theme.clrDark};
    color: ${props => props.theme.clrLight};

    img {
        width: 120px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        padding: .5rem;
        transition: transform 300ms ease-in-out;

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
    }


    p {
        opacity: .8;
        font-size: .8rem;
    }


    @media(min-width: 700px){
        ul {
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }
`