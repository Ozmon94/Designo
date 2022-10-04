import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.dark ? props.theme.colors.white : props.theme.colors.peach};
  color: ${(props) =>
    props.dark ? props.theme.colors.darkGrey : props.theme.colors.white};
  border: none;
  padding: 16px 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightPeach};
    color: ${(props) => props.theme.colors.white};
  }
`;

export default Button;
