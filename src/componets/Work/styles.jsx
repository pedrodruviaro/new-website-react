import styled from "styled-components";

export const WorkStyled = styled.section``;

export const WorkGrid = styled.div`
    display: grid;
    margin: 4rem auto;
    gap: 2rem;

    @media (min-width: 650px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 0;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;

        img {
            height: 100%;
        }

        div {
            width: 100%;
            height: 100%;
        }

        .work1 {
            grid-column: 1/4;
            grid-row: 1/2;
        }

        .work2 {
            grid-column: 4/7;
            grid-row: 1/2;
        }

        .work3 {
            grid-column: 1/3;
            grid-row: 2/3;
        }

        .work4 {
            grid-column: 3/5;
            grid-row: 2/3;
        }

        .work5 {
            grid-column: 5/7;
            grid-row: 2/3;
        }
    }
`;
