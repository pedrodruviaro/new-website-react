import styled from "styled-components";

export const ProfileStyled = styled.section`
    display: grid;
    position: relative;
    text-align: center;
    padding: 8rem 0;

    h2 {
        font-weight: 300;
    }

    p {
        font-size: 1.35rem;
        color: ${props => props.theme.clrLight};
        background-color: ${props => props.theme.clrAccent};
        width: max-content;
        padding: .25rem 1rem;
        text-align: center;
        margin: 1rem auto;
    }

    img {
        width: 200px;
        max-width: 400px;
        margin: .5rem auto 0 auto;
        border-radius: 10px;
        box-shadow: ${props => props.theme.bs};
    }

    strong {
        display: block;
        font-weight: 900;
    }

    @media(min-width: 600px){
        display: grid;
        margin: 0 auto;
        justify-content: center;
        grid-template-columns: min-content max-content;
        grid-column-gap: 1.5rem;
        grid-template-areas: "img title"
                            "img description";


        
        img {
            grid-area: img;
            min-width: 250px;
            position: relative;
            z-index: 2;
        }
        
        P {
            align-self: baseline;
            grid-column: -1/1;
            grid-row: 2;
            position: relative;
            left: -1.5em;
            text-align: right;
            width: calc(100% + 1.5em);
        }

        h2 {
            font-size: 4rem;
            align-self: center;
            text-align: left;
        }
    }


`