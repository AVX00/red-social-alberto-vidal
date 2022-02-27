import userActionTypes from "../actions/user/userActionTypes";

const userReducer = (currentUser, action) => {
  let newUser;
  switch (action.type) {
    case userActionTypes.loadUser:
      newUser = action.user;
      break;
    case userActionTypes.logOutUser:
      newUser = "";
      break;
    default:
  }
  return newUser;
};

export default userReducer;
