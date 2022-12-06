import { useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  Arrow,
  ListContainer,
  ListElement,
  Divider,
} from "./styles.dropdown";

const DropdownList = (props) => {
  return (
    <ListContainer toggled={props.toggled}>
      {props.list.map((item) => {
        return (
          <ListElement onClick={props.handleSelect} key={item}>
            {item}
          </ListElement>
        );
      })}
      <Divider />
      <ListElement onClick={props.handleSelect}>Settings</ListElement>
    </ListContainer>
  );
};

export default function Dropdown() {
  const [toggled, setToggled] = useState(false);
  const [header, setHeader] = useState("");
  const list = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  const handleToggle = () => {
    setToggled(!toggled);
  };

  const handleSelect = ({ target }) => {
    setHeader(target.innerText);
  };

  return (
    <DropdownContainer onClick={handleToggle}>
      <DropdownHeader toggled={toggled}>
        {header || "Choose Country"}
        <Arrow toggled={toggled} />
      </DropdownHeader>
      <DropdownList handleSelect={handleSelect} toggled={toggled} list={list} />
    </DropdownContainer>
  );
}