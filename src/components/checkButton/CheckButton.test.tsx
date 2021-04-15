import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { CheckButton } from "./CheckButton";

describe("CheckButton component", () => {
  it("shows the button in active mode", () => {
    render(<CheckButton allowedToCheck={true} onCheckColors={jest.fn()} />);
    expect(screen.getByTestId("checkButton")).toBeInTheDocument();
  });
  it("shows the button in active mode", () => {
    const { container } = render(
      <CheckButton allowedToCheck={false} onCheckColors={jest.fn()} />
    );
    expect(container.children[0].className).toEqual("ok-button disabled");
  });
  it("fires onclick on active mode", () => {
    const onClick = jest.fn();
    const { container } = render(
      <CheckButton allowedToCheck={true} onCheckColors={onClick} />
    );
    fireEvent.click(screen.getByText(/check/i));
    expect(onClick).toHaveBeenCalled();
  });
});
