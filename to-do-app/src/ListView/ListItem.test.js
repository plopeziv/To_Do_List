import React from 'react';
import ListItem from './ListItem';
import { render, screen, fireEvent } from "@testing-library/react"
import { shallow } from "enzyme";

test("renders items from to-do list", () => {
  const filteredJson = {"toDoItem": "First Item", "completed": false}

  render(<ListItem itemProperties = {filteredJson}/>);

  expect(screen.getByText(/First Item/i)).toBeInTheDocument();
});

test("renders remove button image", () => {
  const filteredJson = {"toDoItem": "First Item", "completed": false}

  render(<ListItem itemProperties = {filteredJson}/>);

  const image = screen.getByRole("img");

  expect(image).toHaveAttribute("src", "/minus-button.png");
});

test("checkbox is rendered once", () => {
  const filteredJson = {"toDoItem": "First Item", "completed": false}

  render(<ListItem itemProperties = {filteredJson}/>);

  const checkbox = screen.getAllByRole("checkbox");

  expect(checkbox).toHaveLength(1);
});

test("checkbox is marked if item is done", () => {
  const filteredJson = {"toDoItem": "First Item", "completed": true}

  render(<ListItem itemProperties = {filteredJson}/>);

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox.checked).toBeTruthy();
});

test("checkbox completed switches states after click", () => {
  const filteredJson = {"toDoItem": "First Item", "completed": true}

  render(<ListItem itemProperties = {filteredJson}/>);

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(checkbox.checked).toBeFalsy();
});

test("changes the status of active list", () => {
  const filteredJson = {"toDoItem": "First Item", "completed": false}

  const wrapper = shallow(<ListItem itemProperties={filteredJson}/>);
  
  render(<ListItem itemProperties={filteredJson}/>);

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(wrapper.instance().props.itemProperties).toStrictEqual({"toDoItem": "First Item", "completed": true});
});
