import { useCallback, useContext } from "react";
import { loadUserActionCreator } from "../store/actions/user/userActionsCreator";
import UserContext from "../store/constexts/userContext/UserContext";

const useUser = () => {
  const { dispatch } = useContext(UserContext);
  const loginUser = useCallback(
    async (userData) => {
      const loginEndPoint = `${process.env.REACT_APP_API}user/login`;
      try {
        const response = await fetch(loginEndPoint, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem("token", token);
          dispatch(loadUserActionCreator(userData.username));
        }
      } catch (error) {}
    },
    [dispatch]
  );

  const registerUser = useCallback(async (userData) => {
    const registerEndPoint = `${process.env.REACT_APP_API}user/register`;
    try {
      const response = await fetch(registerEndPoint, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        dispatch(loadUserActionCreator(userData.username));
      }
    } catch (error) {}
  }, []);

  return { loginUser, registerUser };
};

export default useUser;
