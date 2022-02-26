import userActionTypes from "./userActionTypes";

export const userLoginActionCreator = (user) => ({
  type: userActionTypes.loginUser,
  user,
});

export const userRegisterActionCreator = (user) => ({
  type: userActionTypes.registerUser,
  user,
});
