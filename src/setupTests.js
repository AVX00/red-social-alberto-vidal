import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { server } from "./mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

export const renderInRouter = (components) => {
  const Router = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
  };

  return render(components, { wrapper: Router });
};
