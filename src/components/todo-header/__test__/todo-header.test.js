import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoHeader from "../todo-header";

//mocking comp:harıcı comp lere bagımlılıkları olan
//comp ın testı sırasında hata alınabılır.
//bu duurmda comp ın bır mock versıyonu olusturulur.
const MockTodoHeader = ({ title }) => {
  return (
    <BrowserRouter>
      <TodoHeader title={title} />
    </BrowserRouter>
  );
};

//it /test methodu bir açıklama ve bir fonk alır
//--header comp dekı title nın render edlip edilmedıne kontrol edılecek--
//unit test yapılıyor ve title dısrıdan parametre olarak alınıyr ve ona gore hreket etmelıısn
// it("should be rendered with given title", () => {
//   render(<TodoHeader title="Hello World" />);
//   const headerEl = screen.getByText(/hello world/i);
//   expect(headerEl).toBeInTheDocument();
// });

//not: header ıcınde react router dom dan lınk elementlerı
//odugu ıcın ve lınk elementlerı sadece browserrouter altında
//çalıstıgı için header comp i rnder edıldıgınde
// hata alabılırsınız.
//bu duurmda header comp ını mock lamamız gerekır

//title geliyormu onun testi
it("should be rendered with given title", () => {
  render(<MockTodoHeader title="Hello World" />);
  const headerEl = screen.getByText(/hello world/i);
  expect(headerEl).toBeInTheDocument();
});

//title hiçbirşey gelmedıgınde test edılmesı
it("should be rendered default title", () => {
  render(<MockTodoHeader title="" />); //title bostu ve todo app yazılı
  const headerEl = screen.getByText(/todo app/i);
  expect(headerEl).toBeInTheDocument();
});
