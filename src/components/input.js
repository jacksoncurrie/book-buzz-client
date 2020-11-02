import React from "react";

function Input(props) {
  const { label, type = "text", name, className = "", ...otherProps } = props;

  const classes = `input-item input-item-simple ${className}`;

  return (
    <div className={classes} {...otherProps}>
      <p className="input-item__label">{label}</p>
      <input className="input input-item__input" type={type} name={name} />
    </div>
  );
}

export default Input;
