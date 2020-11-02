import React from "react";

function TextArea(props) {
  const { label, name, className = "", ...otherProps } = props;

  const classes = `input-item input-item-simple ${className}`;

  return (
    <div className={classes} {...otherProps}>
      <p className="input-item__label">{label}</p>
      <textarea className="input input-item__input" name={name}></textarea>
    </div>
  );
}

export default TextArea;
