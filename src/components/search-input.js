import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchInput(props) {
  return (
    <div className="input--icon">
      <i className="input--icon__icon">
        <FontAwesomeIcon icon={props.icon} />
      </i>
      <input className="input input--icon__input" type="text" />
    </div>
  );
}

export default SearchInput;
