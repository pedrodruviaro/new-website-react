import styled from "styled-components";

export const Curriculum = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4rem auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px,
                rgba(149, 157, 165, 0.2) 0px 8px 24px;

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
    gap: 3rem;
    background: linear-gradient(135deg, #43284e, #090d3d);
    

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
        font-size: 0.9rem;
        text-align: center;
    }

    .titulo::after {
        content: "";
        display: block;
        width: 70px;
        margin: 0 auto;
        margin-top: 0.5rem;
        height: 3px;
    }

    .perfil-pessoal h2 {
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }

    .habilidades h2 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 1rem;
    }

    .habilidades li {
        list-style: none;
        margin: 0.5rem 0;
    }

    .contato h2 {
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-size: 1.25rem;
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
    padding: 2rem 4rem;
    padding-left: 6rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    h2 {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        width: max-content;
        margin-bottom: 1rem;
    }

    h3 {
        font-weight: 600;
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 900px) {
        flex: 2;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        position: relative;
        left: -3rem;
        width: calc(100% + 3rem);
    }
`;
