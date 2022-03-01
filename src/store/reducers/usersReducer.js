import usersActionTypes from "../actions/users/usersActionTypes";

const usersReducer = (currentUsers, action) => {
  let newUsers;

  switch (action.type) {
    case usersActionTypes.addEnemy:
      break;
    case usersActionTypes.addFriend:
      break;
    case usersActionTypes.loadUsers:
      newUsers = [...action.users];
      break;

    default:
      break;
  }

  return newUsers;
};

export default usersReducer;
