import styled from "styled-components";

export const SidebarStyled = styled.aside`
    position: fixed;
    background-color: ${(props) => props.theme.clrDark};
    color: ${(props) => props.theme.clrLight};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    transform: ${(props) =>
        props.open === true ? `translateX(0)` : `translateX(100%)`};
    /* transform: translateX(0); */
    transition: transform 250ms ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    nav ul {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        text-align: center;
    }

    a {
        padding: .5rem 1rem;
    }

    @media(min-width: 900px){
        display: none;
        opacity: 0;
        position: absolute;
        width: 0;
        height: 0;
    }
`;

export const SidebarItem = styled.li`

    a {
        font-weight: ${props => props.theme.weigthBold};
        font-size: ${props => props.theme.fsh3};
        text-decoration: none;
    
        &:hover {
            color: var(--clr-accent);
        }
    }
`;
