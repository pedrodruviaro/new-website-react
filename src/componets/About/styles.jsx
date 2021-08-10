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

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    p {
        flex: 1;
        text-align: center;
    }

    img {
        display: none;
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
