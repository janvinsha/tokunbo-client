import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
describe("Header Component", () => {
  it("Should render", () => {
    render(<MockHeader />);
    const headerElement = screen.getByText(/tokunbo/i);
    expect(headerElement).toBeInTheDocument();
  });
});
