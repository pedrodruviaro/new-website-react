import styled from "styled-components";
// works

export const WorkStyled = styled.section`
color: #fff;
background: linear-gradient(-135deg, #03051f, #2e1b36);
text-align: center;
padding: 4rem 0;

`


export const PortlofioFlex = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 4rem auto 6rem auto;
`;

export const CardWork = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.clrDark};
    color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.06) 0px 2px 4px -1px;
    max-width: 1000px;
    margin: 0 auto;

    img {   
        width: 100%;
        
        max-width: 500px;
    }

    p {
        padding: 1.5rem 1rem;
        text-align: center;
        max-width: 500px;
    }

    @media (min-width: 800px){
        flex-direction: ${props => props.direction ? props.direction : "row"};

        p {
            padding: 2rem;
            flex: 2;
            text-align: center;
        }
    
        img {
            width: 50%;
            flex: 1;
        }
    }

`
