import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("Hi, I'm (your name)");
});

test("displays an image of yourself", () => {
  render(<App />);
  const image = screen.getByRole("img", { name: /my profile pic/i });
  expect(image).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("https://github.com"));
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("https://linkedin.com"));
});

test("the form includes text inputs for name and email address", () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name:/i);
  const emailInput = screen.getByLabelText(/email:/i);
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  const interest1 = screen.getByLabelText(/interest 1/i);
  const interest2 = screen.getByLabelText(/interest 2/i);
  const interest3 = screen.getByLabelText(/interest 3/i);
  expect(interest1).toBeInTheDocument();
  expect(interest2).toBeInTheDocument();
  expect(interest3).toBeInTheDocument();
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);
  const interest1 = screen.getByLabelText(/interest 1/i);
  fireEvent.click(interest1);
  expect(interest1).toBeChecked();
  fireEvent.click(interest1);
  expect(interest1).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);
  expect(screen.getByText(/thank you for submitting!/i)).toBeInTheDocument();
});
