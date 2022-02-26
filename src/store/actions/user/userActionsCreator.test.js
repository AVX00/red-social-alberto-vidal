import { loadUserActionCreator } from "./userActionsCreator";
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
