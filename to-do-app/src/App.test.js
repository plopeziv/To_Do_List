import App from './App';
import React from 'react';
import { act } from "react-dom/test-utils";
import { react, render, fireEvent, waitFor, screen } from "@testing-library/react"

it("renders 'No List Found' if lists has not loaded", () => {
  render(<App />);

  expect(screen.getByRole('list')).toHaveTextContent("No List Found");
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
            render(<App />);
      });

  const lists = screen.getAllByRole('list');

  expect(lists).toHaveLength(2);
  expect(lists[0]).toHaveTextContent(/First Test Title/i);
  expect(lists[1]).toHaveTextContent(/Second Test Title/i);

  global.fetch.mockRestore();
});
