import usersActionTypes from "./usersActionTypes";

export const loadUsersActionCreator = (users) => ({
  type: usersActionTypes.loadUsers,
  users,
});

export const addFriendUsersActionCreator = (id) => ({
  type: usersActionTypes.addFriend,
  id,
});

export const addEnemydUsersActionCreator = (id) => ({
  type: usersActionTypes.addFriend,
  id,
});
