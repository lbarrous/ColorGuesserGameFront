import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from "@testing-library/react";
import React from "react";
import { Color } from "../../typing";
import { Circle } from "./Circle";

describe("Circle component", () => {
  it("shows the circle", () => {
    render(<Circle color={Color.X} onChangeColor={jest.fn()} position={0} />);
    expect(screen.getByTestId("circle")).toBeInTheDocument();
  });
  it("shows the popover", async () => {
    render(<Circle color={Color.X} onChangeColor={jest.fn()} position={0} />);
    fireEvent.click(screen.getByTestId("circle"));
    await waitFor(() => {
      expect(screen.getByTestId("colorChooser")).toBeInTheDocument();
    });
  });
  it("hides the popover", async () => {
    render(<Circle color={Color.X} onChangeColor={jest.fn()} position={0} />);
    fireEvent.click(screen.getByTestId("circle"));
    await waitFor(() => {
      expect(screen.getByTestId("colorChooser")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("color-blue"));
    await waitForElementToBeRemoved(() => screen.getByTestId("colorChooser"));
  });
});
