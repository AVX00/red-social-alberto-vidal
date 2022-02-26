import userActionTypes from "./userActionTypes";

export const loadUserActionCreator = (user) => ({
  type: userActionTypes.loadUser,
  user,
});
