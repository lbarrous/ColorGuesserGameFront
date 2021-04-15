import { render, screen } from "@testing-library/react";
import React from "react";
import { NotificationAlert } from "./NotificationAlert";

describe("NotificationAlert component", () => {
  it("displays the alert", () => {
    render(<NotificationAlert isDisplayed={true} onClose={jest.fn()} />);
    const ErrorMessage = screen.queryByText(/Server error. Try it later./i);
    expect(ErrorMessage).toBeInTheDocument();
  });
  it("does not displays the alert", () => {
    render(<NotificationAlert isDisplayed={false} onClose={jest.fn()} />);
    const ErrorMessage = screen.queryByText(/Server error. Try it later./i);
    expect(ErrorMessage).not.toBeInTheDocument();
  });
});
