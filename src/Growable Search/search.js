import { SearchInput, IconContainer, SearchForm, SVG } from "./styles.search";
import { useState } from "react";

function Icon(props) {
  return (
    <SVG
      config={props.config}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 122.879 119.799"
      xmlSpace="preserve"
    >
      <path d="M49.988 0h.016v.007C63.803.011 76.298 5.608 85.34 14.652c9.027 9.031 14.619 21.515 14.628 35.303h.007V50.028h-.007a49.932 49.932 0 01-3.471 18.301v.007a50.011 50.011 0 01-5.547 10.307l29.082 26.139.018.016.157.146.011.011a8.602 8.602 0 012.649 5.78 8.611 8.611 0 01-1.979 5.971l-.011.016-.175.203-.035.035-.146.16-.016.021a8.594 8.594 0 01-5.78 2.646 8.602 8.602 0 01-5.971-1.978l-.015-.011-.204-.175-.029-.024-29.745-26.734c-.88.62-1.778 1.209-2.687 1.765a50.063 50.063 0 01-3.813 2.115c-6.699 3.342-14.269 5.222-22.272 5.222v.007h-.016v-.007c-13.799-.004-26.296-5.601-35.338-14.645C5.605 76.291.016 63.805.007 50.021H0v-.049h.007c.004-13.799 5.601-26.296 14.645-35.338C23.683 5.608 36.167.016 49.955.007V0h.033zm.016 11.21v.007h-.049v-.007c-10.686.007-20.372 4.35-27.384 11.359-7.011 7.009-11.358 16.705-11.361 27.404h.007v.049h-.007c.007 10.686 4.347 20.367 11.359 27.381 7.009 7.012 16.705 11.359 27.403 11.361v-.007h.049v.007c10.686-.007 20.368-4.348 27.382-11.359 7.011-7.009 11.358-16.702 11.36-27.4h-.006v-.049h.006c-.006-10.686-4.35-20.372-11.358-27.384-7.009-7.012-16.702-11.359-27.401-11.362z"></path>
    </SVG>
  );
}

export default function GrowSearch(props) {
  const [searchValue, setSearchValue] = useState("");
  const [toggled, setToggled] = useState({ toggled: true });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggled.toggled && setSearchValue("");
    setToggled({ toggled: !toggled.toggled });
  };

  return (
    <SearchForm config={props.config} onSubmit={handleSubmit} toggled={toggled}>
      <SearchInput
        onChange={handleChange}
        value={searchValue}
        toggled={toggled}
        type="text"
        placeholder={props.config?.placeholder || "Search"}
        config={props.config}
      />
      <IconContainer
        config={props.config}
        toggled={toggled}
        onClick={handleSubmit}
      >
        <Icon config={props.config} />
      </IconContainer>
    </SearchForm>
  );
}
