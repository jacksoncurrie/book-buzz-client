import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton(props) {
  const { icon, onButtonClicked } = props;

  return (
    <span>
      <div>
        <button className="btn btn--icon" onClick={onButtonClicked}>
          <i className="fas fa-plus btn--icon__icon">
            <FontAwesomeIcon icon={icon} />
          </i>
        </button>
      </div>
    </span>
  );
}

export default IconButton;
