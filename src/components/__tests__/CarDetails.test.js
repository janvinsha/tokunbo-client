import React from "react";
import { screen, render } from "@testing-library/react";
import CarDetails from "../CarDetails";
import data from "../../api/data";

describe("Render CarDetails Component", () => {
  it("Should render", () => {
    render(<CarDetails data={data} />);
    const carDetails = screen.getByText(/car details/i);
    expect(carDetails).toBeInTheDocument();
  });
});
