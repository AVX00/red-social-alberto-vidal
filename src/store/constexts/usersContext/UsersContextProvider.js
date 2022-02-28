import UsersContext from "./UsersContext";

const UsersContextProvider = ({ children }) => {
  return <UsersContext.Provider>{children}</UsersContext.Provider>;
};

export default UsersContextProvider;
