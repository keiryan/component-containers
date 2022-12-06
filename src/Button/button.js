import {
  ButtonContainer,
  ButtonInnerColor,
  ButtonInnerText,
} from "./styles.button";

export default function Button(props) {
  return (
    <ButtonContainer config={props.config}>
      <ButtonInnerText config={props.config}>
        {props.text || props.children}
      </ButtonInnerText>
      <ButtonInnerColor config={props.config} />
    </ButtonContainer>
  );
}
