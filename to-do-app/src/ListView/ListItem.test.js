import React from 'react';
import ListItem from './ListItem';
import { render, screen, fireEvent } from "@testing-library/react"
import { shallow } from "enzyme";

test("renders items from to-do list", () => {
  const testItem = {"toDoItem": "First Item", "completed": false}

  render(<ListItem itemProperties = {testItem}/>);

  expect(screen.getByText(/First Item/i)).toBeInTheDocument();
});

test("renders remove button image", () => {
  const testItem = {"toDoItem": "First Item", "completed": false}

  render(<ListItem itemProperties = {testItem}/>);

  const image = screen.getByRole("img");

  expect(image).toHaveAttribute("src", "/minus-button.png");
});

test("checkbox is rendered once", () => {
  const testItem = {"toDoItem": "First Item", "completed": false}

  render(<ListItem itemProperties = {testItem}/>);

  const checkbox = screen.getAllByRole("checkbox");

  expect(checkbox).toHaveLength(1);
});

test("checkbox is marked if item is done", () => {
  const testItem = {"toDoItem": "First Item", "completed": true}

  render(<ListItem itemProperties = {testItem}/>);

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox.checked).toBeTruthy();
});

test("checkbox completed switches states after click", () => {
  const testItem = {"toDoItem": "First Item", "completed": true}

  render(<ListItem itemProperties = {testItem}/>);

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(checkbox.checked).toBeFalsy();
});

test("changes the status of active list", () => {
  const testItem = {"toDoItem": "First Item", "completed": false}

  const wrapper = shallow(<ListItem itemProperties={testItem}/>);
  
  render(<ListItem itemProperties={testItem}/>);

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(wrapper.instance().props.itemProperties).toStrictEqual({"toDoItem": "First Item", "completed": true});
});
