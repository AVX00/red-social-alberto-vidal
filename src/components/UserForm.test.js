import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";

describe("Given a UserForm component", () => {
  describe("When it's rendered with isLogin ture", () => {
    test("Then it should render a form with labels username and password and not render name label", () => {
      const expectedUsernameLabel = /username/i;
      const expectedPasswordLabel = /password/i;
      const expectedNameLabel = /^name/i;

      render(<UserForm isLogin={true} />);
      const usernameLabel = screen.getByLabelText(expectedUsernameLabel);
      const passwordLabel = screen.getByLabelText(expectedPasswordLabel);
      const nameLabel = screen.queryByLabelText(expectedNameLabel);

      expect(passwordLabel).toBeInTheDocument();
      expect(usernameLabel).toBeInTheDocument();
      expect(nameLabel).not.toBeInTheDocument();
    });
  });

  describe("When it's rendered with isLogin false", () => {
    test("Then it should render a form with three labels, username password and name", () => {
      const expectedUsernameLabel = /username/i;
      const expectedPasswordLabel = /password/i;
      const expetedNameLabel = /^name/i;

      render(<UserForm isLogin={false} />);
      const usernameLabel = screen.getByLabelText(expectedUsernameLabel);
      const passwordLabel = screen.getByLabelText(expectedPasswordLabel);
      const nameLabel = screen.getByLabelText(expetedNameLabel);

      expect(passwordLabel).toBeInTheDocument();
      expect(usernameLabel).toBeInTheDocument();
      expect(nameLabel).toBeInTheDocument();
    });
  });
});
