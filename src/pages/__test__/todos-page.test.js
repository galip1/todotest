import { render, screen } from "@testing-library/react";
import TodosPage from "../todos-page";
import userEvent from "@testing-library/user-event";

///eklenen tas in listeye gelip gelmediği testi
//input -todoınput--ve --todolist--in parentinede test edılmeli. ortak bır parentte

describe("adding functionality", () => {
  it("should render new task in the list", () => {
    render(<TodosPage />); ///ikiisnin ortak parentı -todospage
    const buttonEl = screen.getByRole("button", { name: "Add" }); //birçok button olabılır,o nedenlebutton uzerınde yazılı name
    const inputEl = screen.getByPlaceholderText(/Type some text/i);
    userEvent.type(inputEl, "hello react");
    userEvent.click(buttonEl);

    //hello react geldi mi "hello react" veya /hello reat/i
    const listItemEl = screen.getByText(/hello react/i);
    expect(listItemEl).toBeInTheDocument();
  });
});
