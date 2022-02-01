import React from 'react';
import ListItem from './ListItem';
import { render, screen } from "@testing-library/react"

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
