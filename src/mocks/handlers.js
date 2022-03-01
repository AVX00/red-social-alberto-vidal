import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API}user/login`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        token: "asthsashtasthasahsnah",
      })
    );
  }),

  rest.post(`${process.env.REACT_APP_API}user/register`, (req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
