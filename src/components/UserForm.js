const UserForm = ({ isLogin }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="username">username</label>
        <input type="text" id="username" formNoValidate autoComplete="false" />
      </div>
      {!isLogin && (
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input type="text" id="name" formNoValidate autoComplete="false" />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="text" id="password" formNoValidate autoComplete="false" />
      </div>
      <button type="submit">{isLogin ? "Log In" : "Sign in"}</button>
    </form>
  );
};

export default UserForm;
