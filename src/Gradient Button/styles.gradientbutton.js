import styled from "styled-components";

export const StyledButton = styled.div`
  padding: 12px 40px;
  background: rgb(58, 184, 160);
  background: linear-gradient(
    90deg,
    rgba(58, 184, 160, 1) 0%,
    rgba(63, 198, 171, 1) 35%,
    rgba(68, 215, 162, 1) 100%
  );
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  :hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.1);
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;