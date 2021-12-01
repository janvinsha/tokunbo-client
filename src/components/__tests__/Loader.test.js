import React from "react";

import { screen, render } from "@testing-library/react";
import Loader from "../Loader";

describe("Render Loader Component ", () => {
  it("Should render if visible is true", () => {
    render(<Loader visible={true} />);
    const loader = screen.queryByTestId("container");
    expect(loader).toBeInTheDocument();
  });
  it("Should not render if visible is false", () => {
    render(<Loader visible={false} />);
    const loader = screen.queryByTestId("container");
    expect(loader).not.toBeInTheDocument();
  });
});
