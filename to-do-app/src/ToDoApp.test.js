import ToDoApp from './ToDoApp';
import React from 'react';
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react"

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

test("renders 'No List Found' if lists has not loaded", () => {
  render(<ToDoApp />);

  expect(screen.getByRole('list')).toHaveTextContent("No List Found");
});

test("renders ToDo lists titles", async () => {
  await act(async () => {
    render(<ToDoApp />);
  });

  const lists = screen.getAllByRole('list');

  expect(lists).toHaveLength(2);
  expect(lists[0]).toHaveTextContent(/First Test Title/i);
  expect(lists[1]).toHaveTextContent(/Second Test Title/i);

  global.fetch.mockRestore();
});

test("changeActiveList changes activeList", async () => {
  const wrapper = shallow(<ToDoApp/>);

  const testList = { "id": 1, "title": "Dummy Title", "items": 
        [ {"toDoItem": "First Item", "completed": false} ] }

  wrapper.instance().changeActiveList(testList);

  expect(wrapper.state().activeList.title).toBe("Dummy Title");
})

test("changes active list on click", async () => {
  const wrapper = shallow(<ToDoApp/>);

  await act(async () => {
    render(<ToDoApp />);
  });

  wrapper.find('ul').first().simulate('click');
 
  expect(wrapper.state().activeList.title).toBe("First Test Title");
})

test("renders submit button", () => {
  render(<ToDoApp />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Submit");
})

test("submit button is disabled if there is no active lists", () => {
  render(<ToDoApp />);

  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
})

test("submit button is enabled if list is active", async () => {
  const wrapper = shallow(<ToDoApp/>);

  await act(async () => {
    render(<ToDoApp />);
  });

  wrapper.find('ul').first().simulate('click');

  expect(wrapper.find('button').prop('disabled')).toEqual(false);
})

test("calls the putActiveList integration test", async () => {
  const spy = jest.spyOn(ToDoApp.prototype, "putActiveList");
  const wrapper = shallow(<ToDoApp/>);

  await act(async () => {
    render(<ToDoApp />);
  });

  expect(wrapper.find('button').prop('disabled')).toEqual(true);

  wrapper.find('ul').first().simulate('click');

  expect(wrapper.find('button').prop('disabled')).toEqual(false);

  wrapper.find("button").simulate("click");

  expect(ToDoApp.prototype.putActiveList).toHaveBeenCalledTimes(1);
})
