import { DropdownList } from "./DropDownList";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const labels = {
  hide: "Hide",
  show: "Show",
};

const data = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
];

const makeSut = (props) => {
  return (
    <DropdownList
      data={data}
      labels={labels}
      onRemoveItem={jest.fn()}
      {...props}
    />
  );
};

describe("<DropdownList />", () => {
  test("Should not render ul component on initial render", () => {
    const { container } = render(makeSut({}));
    expect(container.querySelector("ul")).not.toBeInTheDocument();
  });

  test("Should render ul component when click on button", () => {
    const { container, getByText } = render(makeSut({}));
    fireEvent.click(getByText(labels.show));
    expect(container.querySelector("ul")).toBeInTheDocument();
  });

  test("Should switch button label on click", () => {
    const { getByText, queryByText } = render(makeSut({}));
    expect(getByText(labels.show)).toBeInTheDocument();
    expect(queryByText(labels.hide)).toBeNull();
    fireEvent.click(getByText(labels.show));
    expect(queryByText(labels.show)).toBeNull();
    expect(getByText(labels.hide)).toBeInTheDocument();
  });

  test("Should render 3 li correctly", () => {
    const { getByText, container } = render(makeSut({}));
    fireEvent.click(getByText(labels.show));
    expect(container.querySelectorAll("li").length).toBe(data.length);
  });

  test("Should call onRemoveItem callback correctly", () => {
    const onRemoveItem = jest.fn();
    const { getByText, getAllByText } = render(makeSut({ onRemoveItem }));
    fireEvent.click(getByText(labels.show));
    fireEvent.click(getAllByText(/Remove/)[2]);
    expect(onRemoveItem).toHaveBeenCalledWith(data[2], 2);
  });
});
