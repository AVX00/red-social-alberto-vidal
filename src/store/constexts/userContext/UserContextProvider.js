import { useReducer } from "react";
import userReducer from "../../reducers/userReducer";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, "");
  return (
    <UserContext.Provider value={(user, dispatch)}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
