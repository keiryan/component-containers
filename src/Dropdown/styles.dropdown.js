import styled from "styled-components";

const RoundedBox = styled.div`
  border-radius: 8px;
`;

export const DropdownContainer = styled.div`
  width: 200px;
  position: relative;
`;

export const DropdownHeader = styled(RoundedBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 2px solid ${(props) => (props.toggled ? "#000000" : "#e4ebfa")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const ListContainer = styled(RoundedBox)`
  position: absolute;
  padding: 10px;
  visibility: ${(props) => (props.toggled ? "visible" : "hidden")};
  top: 110%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  max-height: 300px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ListElement = styled(RoundedBox)`
  text-transform: capitalize;
  padding: 10px 20px;
  color: #fff;
  :hover {
    color: #000;
    cursor: pointer;
    background: aliceblue;
  }
`;
export const Divider = styled.div`
  margin: 4px;
  border-top: 1px solid #e4ebfa;
`;

export const Arrow = styled.div`
  width: 0px;
  height: 0px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #fff;
  border-radius: 4px;
  transform: rotate(${(props) => (props.toggled ? "180deg" : "0deg")})
    translateY(${(props) => (props.toggled ? "-1px" : "1px")});
  transition: all 0.2s ease-in-out;
`;