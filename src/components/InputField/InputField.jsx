import React from "react";
import styled from "styled-components";

const InputField = ({
  placeholder,
  id,
  type = "text",
  value,
  onChange,
  error,
  ...rest
}) => {
  return (
    <Wrapper>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error ? (
        <Error>{error.message ? error.message : "Wrong value"}</Error>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 14px;
`;
const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  padding: 11px 14px;
  font-size: 15px;
  line-height: 25px;
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
const Error = styled.div``;

export default InputField;
