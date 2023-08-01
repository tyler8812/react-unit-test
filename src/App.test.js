import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import axios from "axios";

jest.mock("axios");

const fakeUsers = [
  {
    id: 1,
    name: "Test User 1",
    username: "testuser1",
  },
  {
    id: 2,
    name: "Test User 2",
    username: "testuser2",
  },
];

describe("App component", () => {
  // test with api
  // test("it renders", () => {
  //   render(<App />);
  //   expect(screen.getByText("Users:")).toBeInTheDocument();
  // });
  // test("it displays a list of users", async () => {
  //   render(<App />);
  //   expect(screen.getByTestId("user-list")).toBeInTheDocument();
  // });
  // test("it displays a list of users", async () => {
  //   render(<App />);
  //   const userList = await waitFor(() => screen.getByTestId("user-list"));
  //   expect(userList).toBeInTheDocument();
  // });
  // mock (fake data not using api)
  // test("it renders", async () => {
  //   axios.get.mockResolvedValue({ data: fakeUsers });
  //   render(<App />);
  //   expect(await screen.findByText("Users:")).toBeInTheDocument();
  // });
  // test("it displays a list of users", async () => {
  //   axios.get.mockResolvedValue({ data: fakeUsers });
  //   render(<App />);
  //   const userList = await waitFor(() => screen.getByTestId("user-list"));
  //   expect(userList).toBeInTheDocument();
  // });
  // test("it displays a row for each user", async () => {
  //   axios.get.mockResolvedValue({ data: fakeUsers });
  //   render(<App />);
  //   const userList = await waitFor(() => screen.findAllByTestId("user-item"));
  //   expect(userList).toHaveLength(2);
  // });

  // snapshot test
  // test("it renders a correct snapshot", async () => {
  //   axios.get.mockResolvedValue({ data: fakeUsers });
  //   const { asFragment } = render(<App />);

  //   expect(asFragment()).toMatchSnapshot();
  // });

  test("it renders a correct snapshot", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    const { asFragment } = render(<App />);
    await waitForElementToBeRemoved(screen.getByText("Loading users..."));
    expect(asFragment()).toMatchSnapshot();
  });
});
