import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchInput(props) {
  const { icon, onSearchChanged } = props;

  return (
    <div className="input--icon">
      <i className="input--icon__icon">
        <FontAwesomeIcon icon={icon} />
      </i>
      <input
        className="input input--icon__input"
        type="text"
        onChange={onSearchChanged}
      />
    </div>
  );
}

export default SearchInput;
