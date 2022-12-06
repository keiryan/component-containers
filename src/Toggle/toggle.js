import React, { useEffect, useState } from "react";
import { ToggleOuterContainer, ToggleInnerContainer } from "./styles.toggle";

export default function Toggle(props) {
  const [toggleSettings, setToggleSettings] = useState({});
  
  const handleToggle = () => {
    setToggleSettings({
      ...toggleSettings,
      toggled: !toggleSettings.toggled,
    });
  };

  return (
    <ToggleOuterContainer
      toggleSettings={toggleSettings}
      onClick={handleToggle}
    >
      <ToggleInnerContainer toggleSettings={toggleSettings} />
    </ToggleOuterContainer>
  );
}
