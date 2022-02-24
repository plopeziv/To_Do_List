import React from 'react';
import ActionForm from './ActionForm';
import { render, screen, fireEvent } from "@testing-library/react"

test("renders add button image", () => {
  render(<ActionForm />);

  const image = screen.getByRole("img");

  expect(image).toHaveAttribute("src", "/add-item.png");
});

test("renders form for a new item", () => {
  render(<ActionForm />);

  const form = screen.getAllByRole("textbox");

  expect(form).toHaveLength(1);

  const textbox = screen.getByPlaceholderText("Enter New To-Do Item");

  expect(textbox).toBeInTheDocument();
});

test("calls saveActiveList to add a new item to the active list", () => {
  const saveActiveList = jest.fn();
  const testList = { "id": 1, "title": "Dummy Title", "items": 
                      [ {"toDoItem": "First Item", "completed": false} ] }
  
  render(<ActionForm activeList={testList} saveActiveList={saveActiveList} />);

  fireEvent.change(screen.getByRole("textbox"), {target: {value: "New Item"}});
  fireEvent.click(screen.getByRole("img"));
  expect(saveActiveList).toHaveBeenCalled();
});
