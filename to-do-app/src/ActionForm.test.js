import React from 'react';
import ActionForm from './ActionForm';
import { render, screen } from "@testing-library/react"

test("renders add button image", () => {
  render(<ActionForm />);

  const image = screen.getByRole("img");

  expect(image).toHaveAttribute("src", "/plus.png");
});

test("renders form for a new item", () => {
  render(<ActionForm />);

  const form = screen.getAllByRole("textbox");

  expect(form).toHaveLength(1);

  const textbox = screen.getByPlaceholderText("New To-Do Item");

  expect(textbox).toBeInTheDocument();
});
