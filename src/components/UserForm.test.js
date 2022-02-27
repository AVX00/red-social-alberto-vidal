import { fireEvent, render, screen } from "@testing-library/react";
import UserForm from "./UserForm";
import useUser from "../hooks/useUser";

import userEvent from "@testing-library/user-event";
import React from "react";
import UserContextProvider from "../store/constexts/userContext/UserContextProvider";

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

  describe("When it's rendered with login false and all inputs are empty", () => {
    test("Then the submit button should be disabled", () => {
      const buttonName = /sign in/i;

      render(<UserForm isLogin={false} />);
      const submitButton = screen.getByRole("button", { name: buttonName });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When it's rendered with login true and all inputs are empty", () => {
    test("Then the submit button should be disabled", () => {
      const buttonName = /sign in/i;

      render(<UserForm isLogin={false} />);
      const submitButton = screen.getByRole("button", { name: buttonName });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When it's rendered with login true and all inputs are filled", () => {
    test("Then the submit button should not be disabled", () => {
      const expectedUsernameLabel = /username/i;
      const expectedPasswordLabel = /password/i;
      const buttonName = /log in/i;

      render(<UserForm isLogin={true} />);
      const usernameLabel = screen.getByLabelText(expectedUsernameLabel);
      const passwordLabel = screen.getByLabelText(expectedPasswordLabel);
      const submitButton = screen.getByRole("button", {
        name: buttonName,
      });

      userEvent.type(usernameLabel, "astusathu");
      userEvent.type(passwordLabel, "uaestuitd");

      expect(submitButton).not.toBeDisabled();
    });
  });

  describe("When it's rendered with login false and all inputs are filled", () => {
    test("Then the submit button should not be disabled", () => {
      const expectedUsernameLabel = /username/i;
      const expectedPasswordLabel = /password/i;
      const expetedNameLabel = /^name/i;
      const buttonName = /sign in/i;

      render(<UserForm isLogin={false} />);
      const usernameLabel = screen.getByLabelText(expectedUsernameLabel);
      const passwordLabel = screen.getByLabelText(expectedPasswordLabel);
      const nameLabel = screen.getByLabelText(expetedNameLabel);
      const submitButton = screen.getByRole("button", {
        name: buttonName,
      });

      userEvent.type(usernameLabel, "astusathu");
      userEvent.type(passwordLabel, "uaestuitd");
      userEvent.type(nameLabel, "ecbpetuh");

      expect(submitButton).not.toBeDisabled();
    });
  });

  describe("When it's rendered with login true and the submit action is triggered", () => {
    test("Then the function loginUser should be called", async () => {
      const expectedUsernameLabel = /username/i;
      const expectedPasswordLabel = /password/i;
      const buttonName = /log in/i;

      render(
        <UserContextProvider>
          <UserForm isLogin={true} />
        </UserContextProvider>
      );
      const usernameLabel = screen.getByLabelText(expectedUsernameLabel);
      const passwordLabel = screen.getByLabelText(expectedPasswordLabel);
      const submitButton = screen.getByRole("button", {
        name: buttonName,
      });
      fireEvent.submit(submitButton);

      userEvent.type(usernameLabel, "astusathu");
      userEvent.type(passwordLabel, "uaestuitd");
      userEvent.click(submitButton);
    });
  });
});
