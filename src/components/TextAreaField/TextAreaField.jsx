import React from "react";
import styled from "styled-components";

const TextAreaField = ({ id, value, onChange, error, ...rest }) => {
  return (
    <Wrapper>
      <TextArea onChange={onChange} value={value} {...rest} />
      {error?.message ? <Error>{error.message}</Error> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
`;

const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  padding: 11px 14px;
  font-size: 15px;
  line-height: 25px;
  color: white;
  height: 100px;
  resize: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Error = styled.div``;

export default TextAreaField;
