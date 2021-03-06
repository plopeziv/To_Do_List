import React from 'react';
import ListView from './ListView';
import { render, screen } from "@testing-library/react"

test("renders logo if active list is empty", () => {
  render(<ListView/>);

  const image = screen.getByRole("img");

  expect(image).toHaveAttribute("src", "/8L.png");
});

test("renders appropriate number of list items", () => {
    const testList = {"title": "First Test Title", "items": [
        {"toDoItem": "First Item", "completed": false},
        {"toDoItem": "Second Item", "completed": false},
        {"toDoItem": "Third", "completed": false}]}

    render(<ListView activeList = {testList}/>);
  
    const items = screen.getAllByRole("checkbox");

    expect(items).toHaveLength(3);
  });

  test("renders items from to-do list", () => {
    const testList = {"title": "First Test Title", "items": [
        {"toDoItem": "First Item", "completed": false},
        {"toDoItem": "Second Item", "completed": false}]}

    render(<ListView activeList = {testList}/>);
  
    const inputForm = screen.getAllByRole("textbox");

    expect(inputForm).toHaveLength(1);
    expect(screen.getByText(/First Item/i)).toBeInTheDocument();
    expect(screen.getByText(/Second Item/i)).toBeInTheDocument();
  });
