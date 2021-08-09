import React, { useState } from "react";
import { ContactStyled, FormStyled } from "./styles";
import { Container } from "../../componets/Containers";
import { FaPaperPlane } from "react-icons/fa";
import { ButtonSubmit } from "../../componets/Button";
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com';

export default function Index() {

    const history = useHistory()
    const [isPending, setIsPending] = useState(false)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();
        setIsPending(true)

        if(!name || !email || !message){
            return
        }
    
        emailjs.sendForm('service_2y29jom', 'gmail_template', e.target, 'user_37pn5F7XBS1rzbKxl2yb7')
          .then((result) => {
              console.log(result.text);
              setIsPending(false)
              history.push('/confirm-submit')
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <ContactStyled>
            <Container>
                <FormStyled onSubmit={sendEmail}>
                    <label>
                        Your Name
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            required
                            name="name"
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            placeholder="youremail@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            name="email"
                        />
                    </label>

                    <label>
                        Message
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            name="message"
                        ></textarea>
                    </label>

                    {isPending && <p>Sending...</p>}

                    <ButtonSubmit type="submit">
                        Send
                        <FaPaperPlane />
                    </ButtonSubmit>
                </FormStyled>
            </Container>
        </ContactStyled>
    );
}
