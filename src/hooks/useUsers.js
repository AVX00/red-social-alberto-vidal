import { useCallback } from "react";

const useUsers = () => {
  const getAllUsers = useCallback(async () => {
    const response = await fetch(`${process.env.REACT_APP_API}users/list`);
    const users = await response.json();
  }, []);

  return { getAllUsers };
};

export default useUsers;
