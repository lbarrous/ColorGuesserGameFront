import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { InitialDialog } from "./InitialDialog";

describe("InitialDialog component", () => {
  afterEach(() => {
    cleanup;
    jest.resetAllMocks();
  });

  it("shows the dialog", () => {
    render(
      <InitialDialog
        onClose={jest.fn()}
        onNewGame={jest.fn()}
        open={true}
        setError={jest.fn()}
        setIsLoading={jest.fn()}
        setMaxAttempts={jest.fn()}
      />
    );
    expect(screen.getByTestId("newGameForm")).toBeInTheDocument();
  });
});
