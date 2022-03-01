import usersActionTypes from "../actions/users/usersActionTypes";
import usersReducer from "./usersReducer";

describe("Given a users reducer", () => {
  describe("When it receives a current users state and an action with an array of users", () => {
    test("Then it should return a new state with the array of users inside the action", () => {
      const currentUsers = ["aaaaa", "uueuouoeeouau"];
      const expectedUsers = ["uheanh", "etuha", "tuhatnh"];
      const action = {
        type: usersActionTypes.loadUsers,
        users: expectedUsers,
      };

      const newUsers = usersReducer(currentUsers, action);

      expect(newUsers).toEqual(expectedUsers);
    });
  });
});
