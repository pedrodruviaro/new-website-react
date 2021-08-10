import styled from "styled-components";

export const ContactStyled = styled.section``


export const FormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    input, textarea {
        width: 100%;
        margin-top: .75rem;
        padding: .5rem;
        font-size: 1rem;
        border: 1px solid gray;
        border-radius: 2px;
    }

    textarea {
        min-height: 150px;
    }

    label {
        width: 100%;
        margin: .75rem 0;
        font-weight: 600;
    }
`

export const PendingMessage = styled.p`
    font-weight: 600;
    font-size: 1.125rem;
    margin: .25rem;
`