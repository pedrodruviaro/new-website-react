import styled from "styled-components";

export const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 0;
`

export const Article = styled.article`
    border-top: 3px solid ${props => props.theme.clrAccent};
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    h4 {
        font-size: 1.25rem;
        text-align: center;

        @media (min-width: 600px){
            font-size: 1.75rem;
        }
    }

    p {
        margin: 2rem 0;
    }

    .header {
        margin: 1.5rem 0;
        display: grid;
        grid-column-gap: 1rem;
        grid-row-gap: .5rem;
        grid-template-columns: min-content min-content;
        grid-template-areas: "author category"
                            "author date";
    }

    .date {
        grid-area: date;
        font-size: .9rem;
        opacity: .8;
    }

    .author {
        grid-area: author;
        background-color: #cc0070;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: #fff;
        width: 40px;
        height: 40px;
        
    }

    .category {
        grid-area: category;
        font-size: .9rem;
        display: flex;
        align-items: center;
        gap: .25rem;
        align-self: center;
        font-weight: 600;

        &::before {
            content: "";
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #333;
        }
    }
`