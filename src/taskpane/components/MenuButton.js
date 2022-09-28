import * as React from "react";
import PropTypes from "prop-types";
import { DefaultButton } from "@fluentui/react";

const MenuButton = (props) => {
  return (
    <div className="menu-button-container">
      <DefaultButton
        className="home-menu__action"
        iconProps={{ iconName: "ChevronRight" }}
        onClick={props.onClick}
        id={props.id}
      >
        {props.text}
      </DefaultButton>
    </div>
  );
};

MenuButton.propTypes = {
  cls: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  text: PropTypes.string,
};

export default MenuButton;
