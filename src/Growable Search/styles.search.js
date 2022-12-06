import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.config?.border || "2px solid #ffffff33"};
  border-radius: 50px;
  width: ${(props) => (props.toggled.toggled ? "300px" : "60px")};
  transition: all 0.3s ease-in-out;
  margin: 10px;
  background-color: ${(props) =>
    props.config?.backgroundColor || "transparent"};
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.config?.color || "#ffffff"};
  font-size: 14px;
  width: ${(props) => (props.toggled.toggled ? "80%" : "0px")};
  margin-left: ${(props) => (props.toggled.toggled ? "20px" : "0")};
  transition: all 0.3s ease-in-out;
  font-weight: ${(props) =>
    props.config?.fontWeight ? props.config.fontWeight : "normal"};
  ::placeholder {
    color: ${(props) => props.config?.placeholderColor || "#ffffff"};
    font-size: 14px;
    font-weight: ${(props) =>
      props.config?.placeholderWeight
        ? props.config.placeholderWeight
        : "#fff"};
  }
`;

export const SVG = styled.svg`
  fill: ${(props) => props.config?.searchButtonColor || "#000"};
`;

export const IconContainer = styled(Base)`
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.config?.searchButtonContainerColor || "#fff"};
  padding: 12px;
  border-radius: 50px;
  margin: 6px;
  transform: ${(props) =>
    props.toggled.toggled ? "rotate(360deg)" : "rotate(0deg)"};

  transition: all 0.3s ease-in-out;
  :hover {
    background-color: ${(props) =>
      props.config?.searchButtonContainerColorHover || "#fff"};
    cursor: pointer;
  }

  &:hover ${SVG} {
    fill: ${(props) => props.config?.searchButtonColorHover || "#000"};
  }
`;