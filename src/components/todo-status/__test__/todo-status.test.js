import { render, screen } from "@testing-library/react";
import TodoStatus from "../todo-status";
///status bolumunde  gelen degerın tekıl yada cogul
//olması durumuna gore job veya jobs yazıp yazmadıgı

it("should render singular job test", () => {
  render(<TodoStatus count={1} />);
  const pEl = screen.getByText(/1 job left/i);
  expect(pEl).toBeInTheDocument();
});

it("should render plural job test", () => {
  render(<TodoStatus count={10} />);
  const pEl = screen.getByText(/10 jobs left/i);
  expect(pEl).toBeInTheDocument();
});
