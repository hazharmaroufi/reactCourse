import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
    gender: "male",
    rules: false,
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "rules") {
      setForm((form) => ({ ...form, rules: !form.rules }));
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={form.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={changeHandler}
        />
        <select value={form.role} onChange={changeHandler}>
          <option value="user" name="role">
            User
          </option>
          <option value="writer" name="role">
            Writer
          </option>
          <option value="admin" name="role">
            Admin
          </option>
        </select>
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            onChange={changeHandler}
            value="male"
            id="male"
            checked={form.gender === "male"}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            onChange={changeHandler}
            value="female"
            id="female"
            checked={form.gender === "female"}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            name="gender"
            onChange={changeHandler}
            value="other"
            id="other"
            checked={form.gender === "other"}
          />
        </div>
        <input
          type="checkbox"
          id="rules"
          name="rules"
          checked={form.rules}
          onChange={changeHandler}
        />
        <label htmlFor="rules">I accept the rules !</label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;
