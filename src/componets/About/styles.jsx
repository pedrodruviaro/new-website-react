import styled from "styled-components";

export const AboutStyled = styled.section`
    padding: 4rem 0 0 0;
`;

export const Split = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
    margin: 4rem auto;
    padding: 1rem;
    border-radius: 5px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    p {
        flex: 1;
        text-align: center;
    }

    img {
        display: none;
        transition: transform 200ms ease;
    }

    &:focus img {
        transform: scale(1.1);
    }

    button {
        background: none;
        outline: none;
        border: none;
        color: ${props => props.theme.clrAccent};
        font-size: 1.125rem;
        font-weight: 600;
        cursor: pointer;

        &:hover, &:focus {
            text-decoration: underline;
        }
    }

    @media (min-width: 900px) {
        flex-direction: ${(props) => props.direction};

        img {
            flex: 1;
            width: 5rem;
            max-width: 20rem;
            display: block;
        }
        p {
            text-align: justify;
        }
    }
`;
