// import { render, screen } from '@testing-library/react';
import App from './App';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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

it("renders 'No List Found' if lists has not loaded", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.textContent).toBe("No List Found");
});

it("renders ToDo lists titles", async () => {
  const fakeJson = 
   [
      { "id": 1, "title": "First Test Title"},
      { "id": 2, "title": "Second Test Title"}
    ]

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeJson)
    })
  );

  await act(async () => {
    render(<App />, container);
  });
  
  expect(container.textContent).toBe("First Test TitleSecond Test Title");
  
  global.fetch.mockRestore();
});
