import { useState } from "react";

const UserForm = ({ isLogin }) => {
  const emptyForm = isLogin
    ? {
        username: "",
        password: "",
      }
    : {
        name: "",
        password: "",
        username: "",
      };

  const [formData, setFormData] = useState(emptyForm);

  const handleDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="username">username</label>
        <input
          onChange={handleDataChange}
          value={formData.username}
          placeholder="username"
          type="text"
          id="username"
          formNoValidate
          autoComplete="false"
        />
      </div>
      {!isLogin && (
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input
            onChange={handleDataChange}
            value={formData.name}
            placeholder="name"
            type="text"
            id="name"
            formNoValidate
            autoComplete="false"
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          onChange={handleDataChange}
          value={formData.password}
          placeholder="password"
          type="password"
          id="password"
          formNoValidate
          autoComplete="false"
        />
      </div>
      <button type="submit">{isLogin ? "Log In" : "Sign in"}</button>
    </form>
  );
};

export default UserForm;
