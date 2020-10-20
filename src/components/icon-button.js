import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton(props) {
  return (
    <button className="btn btn--icon mdc-ripple-surface">
      <i className="fas fa-plus btn--icon__icon">
        <FontAwesomeIcon icon={props.icon} />
      </i>
    </button>
  );
}

export default IconButton;
