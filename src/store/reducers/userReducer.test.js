import userActionTypes from "../actions/user/userActionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer", () => {
  describe("When it's called with a current user and an action with type load user and a user", () => {
    test("Then it should return a new user equal to the one in the action", () => {
      const currentUser = "aaaaoaaaaaaa";
      const user = "AHHHHHHHHH";
      const action = {
        type: userActionTypes.loadUser,
        user: user,
      };

      const newUser = userReducer(currentUser, action);

      expect(newUser).toEqual(user);
    });
  });

  describe("When it's called with a current user and an action with type logout user", () => {
    test("Then  it should return a new user equal to ''", () => {
      const currentUser = "etuatsuh";
      const expectedUser = "";
      const action = {
        type: userActionTypes.logOutUser,
      };

      const newUser = userReducer(currentUser, action);

      expect(newUser).toEqual(expectedUser);
    });
  });
});
