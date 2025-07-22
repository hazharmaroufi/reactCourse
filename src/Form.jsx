import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [gender, setGender] = useState("male");
  const [rules, setrules] = useState(false);

  const loginHandler = () => {
    console.log({ email, password, role, gender, rules });
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const selectHandler = (event) => {
    setRole(event.target.value);
  };
  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const rulesHandler = () => {
    setrules((rules) => !rules);
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
      <select value={role} onChange={selectHandler}>
        <option value="user">User</option>
        <option value="writer">Writer</option>
        <option value="admin">Admin</option>
      </select>
      <div>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          onChange={genderHandler}
          value="male"
          id="male"
          checked={gender === "male"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          onChange={genderHandler}
          value="female"
          id="female"
          checked={gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          onChange={genderHandler}
          value="other"
          id="other"
          checked={gender === "other"}
        />
      </div>
      <input
        type="checkbox"
        id="rules"
        checked={rules}
        onChange={rulesHandler}
      />
      <label htmlFor="rules">I accept the rules !</label>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default Form;
