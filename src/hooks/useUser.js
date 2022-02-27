import { useContext } from "react";
import { loadUserActionCreator } from "../store/actions/user/userActionsCreator";
import UserContext from "../store/constexts/userContext/UserContext";

const useUser = () => {
  const { dispatch } = useContext(UserContext);
  const loginUser = async (userData) => {
    const loginEndPoint = `${process.env.REACT_APP_API}login`;
    try {
      const response = await fetch(loginEndPoint, {
        method: "post",
        headers: {
          ContentType: "application/json",
        },
        body: userData,
      });
      if (response.ok) {
        const token = await response.json();
        localStorage.setItem("token", token);
        dispatch(loadUserActionCreator(userData.username));
      }
    } catch (error) {}
  };

  return { loginUser };
};

export default useUser;
