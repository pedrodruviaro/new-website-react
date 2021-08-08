import styled from "styled-components";

export const AboutStyled = styled.section``;

export const Split = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
    margin: 4rem auto;

    p {
        flex: 1;
        text-align: center;
    }

    img {
        display: none;
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
