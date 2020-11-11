import React, { useState } from "react";
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";
import Input from "../components/input";

function LoginSignup(props) {
  const { onCancelClicked, onSaveClicked } = props;

  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  return (
    <div className="new-review visible-section">
      <h1 className="new-review__title">{register ? "Register" : "Login"}</h1>
      <Input
        label="Email"
        name="email"
        type="email"
        value={email}
        error={emailError}
        onTextChanged={(e) => {
          setEmailError("");
          setEmail(e.target.value);
        }}
      />
      {register ? (
        <Input
          label="Name"
          name="name"
          value={name}
          error={nameError}
          onTextChanged={(e) => {
            setNameError("");
            setName(e.target.value);
          }}
        />
      ) : null}
      <Input
        label="Password"
        name="password"
        type="password"
        value={password}
        error={passwordError}
        onTextChanged={(e) => {
          setPasswordError("");
          setPassword(e.target.value);
        }}
      />
      {register ? (
        <Input
          label="Confirm password"
          name="confirm-password"
          type="password"
          value={confirmPassword}
          error={confirmPasswordError}
          onTextChanged={(e) => {
            setConfirmPasswordError("");
            setConfirmPassword(e.target.value);
          }}
        />
      ) : null}
      <div className="submit" style={{ marginTop: "20px" }}>
        <PrimaryButton
          className="btn--save"
          type="submit"
          onButtonClicked={async () => {
            // Validate inputs
            let error = false;
            if (email.trim().length === 0) {
              setEmailError("Email is required");
              error = true;
            } else if (
              !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email
              )
            ) {
              setEmailError("Email is not valid");
              error = true;
            }
            if (register && name.trim().length === 0) {
              setNameError("Name is requried");
              error = true;
            }
            if (password.length === 0) {
              setPasswordError("Password is required");
              error = true;
            }
            if (register && confirmPassword !== password) {
              setConfirmPasswordError("Passwords don't match");
              error = true;
            }
            if (error) return;
            if (!(await onSaveClicked(register, email, password, name))) {
              if (register) setEmailError("Email already exists");
              else setPasswordError("Incorrect details");
            }
          }}
        >
          {register ? "Register" : "Login"}
        </PrimaryButton>
        <SecondaryButton onButtonClicked={onCancelClicked}>
          Cancel
        </SecondaryButton>
      </div>
      <div className="register-button">
        <SecondaryButton onButtonClicked={() => setRegister(!register)}>
          {register ? "Have and account? Login" : "No account? register here"}
        </SecondaryButton>
      </div>
    </div>
  );
}

export default LoginSignup;
