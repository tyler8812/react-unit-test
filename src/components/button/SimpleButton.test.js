import { Button } from "./SimpleButton";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const makeSut = (props) => {
  return <Button label="label" onClick={jest.fn()} {...props} />;
};

describe("<Button />", () => {
  test("Should render label correctly", () => {
    render(makeSut({ label: "My Button" }));
    expect(screen.getByText(/My Button/)).toBeInTheDocument();
  });

  test("Should call onClick successfully", () => {
    const spy = jest.fn();

    render(makeSut({ onClick: spy }));
    fireEvent.click(screen.getByText(/label/));

    expect(spy).toHaveBeenCalled();
  });
});
