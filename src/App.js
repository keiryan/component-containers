import "./App.css";
import { Container, Flex } from "./styles.app.js";
import Button from "./Button/button.js";
import Gmail from "./Gmail/gmail.js";
import GrowSearch from "./Growable Search/search.js";
import GradientButton from "./Gradient Button/gradientbutton.js";
import DuckDuckGo from "./Duck Duck Go/search.js";
import DropDown from "./Dropdown/dropdown.js";
import Toggle from "./Toggle/toggle.js";

export default function App() {
  return (
    <Container>
      <Flex>
        <Button config={{ animationOrigin: "left" }}>Left</Button>
      </Flex>
      <Flex
        // Default color is white
        backgroundColor=" #78CFB5"
      >
        <DropDown list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} />
      </Flex>
      <Flex backgroundColor="#7EE0FF">
        <DuckDuckGo />
      </Flex>
      <Flex backgroundColor="black">
        <Toggle />
      </Flex>
      <Flex backgroundColor="#F8F7A3">
        <GradientButton />
      </Flex>
      <Flex backgroundColor=" #14124A">
        <GrowSearch
          config={{ backgroundColor: "#F88E71", fontWeight: "bold" }}
        />
      </Flex>
      <Flex backgroundColor="orange">
        <Gmail />
      </Flex>
    </Container>
  );
}
