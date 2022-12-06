import styled from "styled-components";

export const SVG = styled.svg`
  fill: #fff;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  background-color: #474747;
  border-radius: 8px;
  padding: 8px;
  width: 500px;

  :focus-within {
    background-color: #fff;
  }

  :focus-within ${SVG} {
    fill: #474747;
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  flex: 1;
  outline: none;
  font-weight: bold;
  :focus-within {
    color: #000;
  }
`;

export const IconContainer = styled.div`
  border-radius: 50px;
  padding: 8px;
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;