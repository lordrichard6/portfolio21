import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function FormComponent() {

  return (
    <FormContainer>
      <form>
        <input
          type="text"
          name="name"
          // value='name'
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          // value='email'
          placeholder="Email"
        />
        <textarea
          name="message"
          // value='message'
          placeholder="Message"
        />
      </form>
      <SubmitButton type="submit">
          <Icon>
              <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
      </SubmitButton>
    </FormContainer>
  );
}

const FormContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* font-size: 0.75rem; */
  form {
    display: flex;
    flex-direction: column;
  }

  input {
      width: 100%;
      height: 2.5rem;
      border-radius: 0.125rem;
      border: 0;
      padding: 0.5rem;
      margin: 0.25rem;
      background-color: #3c444f;
      color: #eee;
  }

  textarea {
      width: 100%;
      border-radius: 0.125rem;
      border: 0;
      padding: 0.5rem;
      margin: 0.25rem;
      background-color: #3c444f;
      color: #eee;
  }
`;

const SubmitButton = styled.button`
    width: 30%;
    align-self: center;
    border-radius: 0.125rem;
    border: 0;
    padding: 0.4rem;
    /* padding-left: 0.25rem;
    padding-right: 0.25rem; */
    margin: 0.25rem;
    background-color: #3c444f;
    color: #eee;
`;

const Icon = styled.div`
    width: 1rem;
    display: inline-block;
`;

const EmailSend = styled.p`
    align-self: center;
    opacity: 1;
`;
