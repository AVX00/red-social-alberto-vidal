import userActionTypes from "../actions/user/userActionTypes";

const userReducer = (currentUser, action) => {
  return { ...action.user };
};

export default userReducer;
