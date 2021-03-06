import styled from "styled-components";

export const HeaderStyled = styled.header`
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;

    background-color: ${props => props.theme.clrDark};
    color: ${props => props.theme.clrLight};

    img {
        width: 120px;
    }

    @media (min-width: 900px){
        img{
            width: 150px;
        }
    }
`

export const MenuNavHeader = styled.nav`
    display: none;

    ul {
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }

    a {
        padding: 0 .25rem;
        text-transform: lowercase;
        font-size: 1.25rem;

        &:hover {
            color: ${props => props.theme.clrAccent}
        }
    }



    @media(min-width: 900px){
        display: block;
    }
`


export const Hamburger = styled.div`

    border: 1px solid ${props => props.theme.clrAccent};
    padding: .5em;
    background: transparent;
    border: 0;
    cursor: pointer;
    z-index: 999;
    right: 1.5rem;
    position: ${props => props.sidebarOpen === true ? "fixed" : "absolute"};


    &::before {
        content: "";
        display: block;
        width: 25px;
        height: 2px;
        background-color: #fff;
    }

    &::after {
        content: "";
        display: block;
        width: 25px;
        height: 2px;
        background-color: #fff;
    }

    .line {
        width: 25px;
        height: 2px;
        margin: 5px 0;
        background-color: #fff;
    }

    @media(min-width: 900px){
        display: none;
    }

`