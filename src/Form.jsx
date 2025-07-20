import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log({ email, password });
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={emailHandler}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={passwordHandler}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
