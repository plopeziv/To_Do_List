import App from './App';
import React from 'react';
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { react, render, fireEvent, waitFor, screen } from "@testing-library/react"

beforeEach(() => {
  const fakeJson = 
   [
      { "id": 1, "title": "First Test Title", "items": [
        {"toDoItem": "First Item", "completed": false},
        {"toDoItem": "Second Item", "completed": false}
       ]},
      { "id": 2, "title": "Second Test Title", "items": [
        {"toDoItem": "First Item", "completed": false},
        {"toDoItem": "Second item", "completed": false}
       ]}
    ]

    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeJson)
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

it("renders 'No List Found' if lists has not loaded", () => {
  render(<App />);

  expect(screen.getByRole('list')).toHaveTextContent("No List Found");
});

it("renders ToDo lists titles", async () => {
  await act(async () => {
    render(<App />);
  });

  const lists = screen.getAllByRole('list');

  expect(lists).toHaveLength(2);
  expect(lists[0]).toHaveTextContent(/First Test Title/i);
  expect(lists[1]).toHaveTextContent(/Second Test Title/i);

  global.fetch.mockRestore();
});

test("changeStateTitle changes activeTitle", async () => {
  const wrapper = shallow(<App/>);

  wrapper.instance().changeStateTitle("Dummy Title");

  expect(wrapper.state().activeTitle).toBe("Dummy Title");
})

test("changes active title on click", async () => {
  const wrapper = shallow(<App/>);

  await act(async () => {
    render(<App />);
  });

  wrapper.find('ul').first().simulate('click');
 
  expect(wrapper.state().activeTitle).toBe("First Test Title");
})
