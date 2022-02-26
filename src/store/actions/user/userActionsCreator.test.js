import {
  userLoginActionCreator,
  userRegisterActionCreator,
} from "./userActionsCreator";
import userActionTypes from "./userActionTypes";

describe("Given a userLoginActionCreator", () => {
  describe("When it receives a user", () => {
    test("Then it should return an object with type login user and the user", () => {
      const user = {
        name: "user",
      };
      const expectedAction = {
        type: userActionTypes.loginUser,
        user,
      };

      const action = userLoginActionCreator(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a userRegisterActionCreator", () => {
  describe("When it receives a user", () => {
    test("Then it should return an object with type register user and the user", () => {
      const user = {
        user: "user",
      };
      const expectedAction = {
        type: userActionTypes.registerUser,
        user,
      };

      const action = userRegisterActionCreator(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
