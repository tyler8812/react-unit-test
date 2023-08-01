import { fireEvent, render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

const makeSut = () => {
  return <App />;
};

// without async
// describe("<App />", () => {
//   test("Should render ul", () => {
//     const { container, getByText } = render(makeSut());

//     fireEvent.click(getByText(/Show Data/));

//     expect(container.querySelector("ul")).toBeInTheDocument();
//   });
// });

describe("<App />", () => {
  test("Should render ul", async () => {
    let screen;
    await act(async () => {
      screen = render(makeSut());
    });

    fireEvent.click(screen.getByText(/Show Data/));

    expect(screen.container.querySelectorAll("li").length).toBe(5);
  });
});
