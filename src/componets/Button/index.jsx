import styled from "styled-components";

export const Button = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.clrAccent};
  color: ${(props) => props.theme.clrLight};
  border: none;
  border-radius: 5px;
  padding: 1em 2em;
  font-size: .9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: ${(props) => props.theme.weigthBold};
  cursor: pointer;
  position: relative;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in;
  margin: 1rem auto;
  box-shadow: rgba(241, 241, 241, 0.2) 0px 7px 29px 0px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: none;
  }
`;
