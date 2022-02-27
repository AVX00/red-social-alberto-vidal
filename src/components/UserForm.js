import { useState } from "react";
import styled from "styled-components";
import useUser from "../hooks/useUser";

const Form = styled.form`
  box-sizing: border-box;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & .form-group {
    width: 100%;
    & label {
      line-height: 100px;
      margin: 20px;
      width: 70px;
      display: inline-block;
    }

    & input {
      padding: 4px;
      width: 200px;
    }
  }
`;

const UserForm = ({ isLogin }) => {
  const { loginUser } = useUser();
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
  const actionOnSubmit = isLogin ? loginUser : () => {};
  const onSubmit = (event) => {
    event.preventDefault();
    actionOnSubmit(formData);
  };
  return (
    <Form onSubmit={onSubmit}>
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
    </Form>
  );
};

export default UserForm;
