import styled from "styled-components";

export const ButtonInnerColor = styled.div`
  width: ${(props) =>
    props.config?.animationOrigin === "left" ||
    props.config?.animationOrigin === "right"
      ? "0%"
      : "100%"};
  height: ${(props) =>
    props.config?.animationOrigin === "top" ||
    props.config?.animationOrigin === "bottom"
      ? "0%"
      : "100%"};
  background-color: ${(props) => props.config?.backgroundColor || "transparent"};
  position: absolute;

  top: ${(props) =>
    props.config?.animationOrigin === "top" ||
    props.config?.animationOrigin === "right" ||
    props.config?.animationOrigin === "left"
      ? 0
      : "auto"};

  left: ${(props) =>
    props.config?.animationOrigin === "left" ||
    props.config?.animationOrigin === "top" ||
    props.config?.animationOrigin === "bottom"
      ? 0
      : "auto"};

  bottom: ${(props) => props.config?.animationOrigin === "bottom" && 0};
  right: ${(props) => props.config?.animationOrigin === "right" && 0};
  z-index: 1;
  transition: all 0.3s ease-in-out;
`;

export const ButtonInnerText = styled.div`
  position: relative;
  z-index: 2;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out;
`;

export const ButtonContainer = styled.div`
  border-radius: 8px;
  background: #e0e0e0;
  box-shadow: 3px 3px 5px #bebebe, -3px -3px 5px #ffffff;
  padding: 10px 40px;
  position: relative;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
  :hover ${ButtonInnerColor} {
    width: ${(props) =>
      (props.config?.animationOrigin === "right" ||
        props.config?.animationOrigin === "left") &&
      "100%"};

    height: ${(props) =>
      (props.config?.animationOrigin === "top" ||
        props.config?.animationOrigin === "bottom") &&
      "100%"};
  }

  :hover ${ButtonInnerText} {
    color: ${(props) => props.config?.backgroundColor && "#fff"};
  }

  :active {
    box-shadow: inset 3px 3px 5px #bebebe, inset -3px -3px 5px #ffffff;
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;