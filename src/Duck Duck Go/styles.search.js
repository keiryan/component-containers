import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: #333333;
  border-radius: 2px;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 12px 12px 10px 20px;
  font-size: 16px;
  width: 100%;
`;

export const IconContainer = styled.div`
  padding: 10px 12px;
  :hover {
    background-color: #444444;
    cursor: pointer;
  }
`;