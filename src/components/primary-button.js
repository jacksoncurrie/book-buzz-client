import React from "react";

function PrimaryButton(props) {
  const { onButtonClicked, children, className = "", ...otherProps } = props;

  const classes = `btn ${className}`;

  return (
    <div>
      <button
        onClick={onButtonClicked}
        className={classes}
        style={{ width: "100%", height: "100%" }}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
}

export default PrimaryButton;
