import React from "react";

function Input(props) {
  const {
    label,
    type = "text",
    name,
    value,
    error,
    onTextChanged,
    className = "",
    ...otherProps
  } = props;

  const classes = `input-item input-item-simple ${className}`;

  return (
    <div className={classes} {...otherProps}>
      <p className="input-item__label">{label}</p>
      <input
        className="input input-item__input"
        type={type}
        name={name}
        value={value}
        onChange={onTextChanged}
      />
      <p className="input__error-text">{error}</p>
    </div>
  );
}

export default Input;
