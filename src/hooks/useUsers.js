import { useCallback, useContext } from "react";
import { loadUsersActionCreator } from "../store/actions/users/usersActionCreators";
import UsersContext from "../store/constexts/usersContext/UsersContext";

const useUsers = () => {
  const { dispatch } = useContext(UsersContext);
  const getAllUsers = useCallback(async () => {
    const response = await fetch(`${process.env.REACT_APP_API}users/list`);
    const users = await response.json();
    dispatch(loadUsersActionCreator(users));
  }, [dispatch]);

  return { getAllUsers };
};

export default useUsers;
