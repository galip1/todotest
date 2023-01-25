import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "../todo-input";
//----textbox bosken butonun disabled olup olmadıgı testı----

// Alttaki mockedAddTodo fonksiyonu sahte ve boş bir fonksiyondur
// render(<TodoInput addTodo={mockedAddTodo}/>); satırındaki test fonksiyonu
// istenildiği şekilde çalışmadığı için ekledik.
// Asıl test edilen fonksiyondaki addTodo nun hata vermesini engelledik

const mockedAddTodo = jest.fn();
//const mockedAddTodo = ()=>{};

it("should render the button as disabled if textbox contains no char", () => {
  render(<TodoInput />); //render(<TodoInput addTdo={(=>{})} />); bos bır fonk yazılır.onuda yukarıda tanımladık
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

///textbox a bırseyler yazıldıgında butonun enabled olup olmadıgı
it("should render the button as enabled if textbox contains some chars", () => {
  render(<TodoInput />);
  //hem texbox hem buton ile etkılesım sozkonusu
  const buttonEl = screen.getByRole("button");
  const inputEl = screen.getByRole("textbox");
  //inputa bırsey yazdk
  userEvent.type(inputEl, "hello react");
  expect(inputEl.value).toBe("hello react"); //yazmasakta olur
  expect(buttonEl).toBeEnabled();
});

///add butonuna tıklandıgında textbox ın bolsaldıgı test
it("input should be empty when click the button", () => {
  //mockedAddTodo olmadan hata verir. cunku addtodo bagımlı
  render(<TodoInput addTodo={mockedAddTodo} />);
  const buttonEl = screen.getByRole("button");
  const inputEl = screen.getByRole("textbox");
  userEvent.type(inputEl, "hello react");
  userEvent.click(buttonEl);
  expect(inputEl).toHaveFocus();
  expect(inputEl.value).toBe("");
});
