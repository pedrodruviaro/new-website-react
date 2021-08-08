import React from "react";
import { ContactStyled, FormStyled } from "./styles";
import {Container} from '../../componets/Containers'
import { FaPaperPlane } from "react-icons/fa";
import { ButtonSubmit } from "../../componets/Button";

export default function index() {
    return (
        <ContactStyled>
            <Container>
                <FormStyled>
                    <label>
                        Your Name
                        <input type="text" />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            placeholder="youremail@example.com"
                        />
                    </label>

                    <label>
                        Message
                        <textarea></textarea>
                    </label>

                    <ButtonSubmit type="submit">
                    Send
                    <FaPaperPlane />
                    </ButtonSubmit>
                </FormStyled>
            </Container>
        </ContactStyled>
    );
}
