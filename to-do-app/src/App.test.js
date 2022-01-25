// import { render, screen } from '@testing-library/react';
import App from './App';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const returnedJSON = {
  "lists": [
    { "id": 1, "title": "Shopping", "user": "Kseniia", "items": [
      {"toDoItem": "Buy Shirt", "completed": false},
      {"toDoItem": "Get Gift", "completed": false},
      {"toDoitem": "Return Purchase", "completed": true}
    ] }
  ]
}
let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Hello World test", () => {
  const hello = "Hello World";
  expect(hello).toBe("Hello World");
});

it("renders list title", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.textContent).toBe("First List");
});
