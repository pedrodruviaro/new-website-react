import styled from "styled-components";

export const Curriculum = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4rem auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px,
        rgba(149, 157, 165, 0.2) 0px 8px 24px;

    p {
        font-size: 1.125rem;
    }
    @media (min-width: 900px) {
        flex-direction: row;
    }
`;

export const SideBarCurriculum = styled.section`
    background-color: gray;
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    background: linear-gradient(135deg, #43284e, #090c36);

    img {
        width: 175px;
        border-radius: 50%;
        margin: 0 auto;
    }

    .nome {
        letter-spacing: 2px;
        text-align: center;
        font-size: 1.75rem;
        font-weight: 900;
    }

    .titulo {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1rem;
        text-align: center;
    }

    .titulo::after {
        content: "";
        display: block;
        width: 70px;
        margin: 0 auto;
        margin-top: 0.5rem;
        height: 3px;
        background-color: #fff;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        line-height: 1.5;
    }

    li::before {
        content: "- ";
    }

    @media (min-width: 900px) {
        flex: 1;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        position: relative;
        z-index: 999;
    }
`;

export const CentralCurriculum = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h4 {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        font-weight: 700;
        width: max-content;
        margin-bottom: 1.25rem;
        background-color: #eee2fd;
    }

    @media (min-width: 900px) {
        flex: 2;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        position: relative;
        left: -3rem;
        width: calc(100% + 3rem);
        padding: 2rem 4rem;
        padding-left: 6rem;
    }
`;
