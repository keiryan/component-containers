import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  gap: 0.6rem;
  flex-wrap: wrap;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  opacity: 0;
  margin: 1rem;
  padding: 4px;
  border-radius: 4px;
  color: #ffffff;
  transition: opacity 0.3s ease-in-out;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 20%;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  background-image: url(${(props) => props.backgroundPicture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4px;
  overflow: hidden;
  :hover {
    cursor: pointer;
    flex-grow: 2;
    ${TextContainer} {
      opacity: 1;
      transition-delay: 0.3s;
    }
  }

  @media (max-width: 768px) {
    max-height: 100%;
  }
  transition: all 0.3s ease-in-out;
`;

export const Anchor = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  font-weight: bold;
  text-decoration: none;
`;

// export const Container = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   gap: 0.6rem;
//   flex-wrap: wrap;
//   overflow: hidden;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;
