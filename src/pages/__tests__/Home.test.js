import React from "react";

import { render, screen, fireEvent, act } from "@testing-library/react";
import Home from "../Home";

describe("Home Component", () => {
  it("Should render submit button", () => {
    render(<Home />);
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should select image when input is clicked or image is dropped", async () => {
    render(<Home />);
    const inputElement = screen.queryByTestId("input");
    global.URL.createObjectURL = jest.fn(() => "details");
    await act(async () => {
      fireEvent.change(inputElement, {
        target: {
          files: [
            new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
          ],
        },
      });
    });
    expect(inputElement.files[0]).toBeTruthy();
  });
});
