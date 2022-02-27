import {
  loadUserActionCreator,
  logOutUserActionCreator,
} from "./userActionsCreator";
import userActionTypes from "./userActionTypes";

describe("Given a loadUserActionCreator", () => {
  describe("When it receives a user", () => {
    test("Then it should return an object with type load user and the user", () => {
      const user = {
        name: "user",
      };
      const expectedAction = {
        type: userActionTypes.loadUser,
        user,
      };

      const action = loadUserActionCreator(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a logOutUserActionCreator", () => {
  describe("When it's called", () => {
    test("Then it should return an object with property type equal to logOutUser type", () => {
      const expectedAction = {
        type: userActionTypes.logOutUser,
      };

      const action = logOutUserActionCreator();

      expect(action).toEqual(expectedAction);
    });
  });
});
