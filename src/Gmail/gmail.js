import { useState } from "react";
import { Form, StyledInput, IconContainer, SVG} from "./styles.gmail";

export default function Gmail() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <IconContainer onClick={handleSubmit}>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </SVG>
      </IconContainer>
      <StyledInput
        onChange={handleChange}
        value={inputValue}
        placeholder="Search"
      />
      <IconContainer>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
        </SVG>
      </IconContainer>
    </Form>
  );
}