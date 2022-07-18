import { render, screen } from '@testing-library/react';
import QuizPage from 'components/pages/QuizPage';


describe("Testing the buttons in quiz section", () => {
  it('Should exist in quiz page after data loads', () => {
    render(<QuizPage />);
    setTimeout(() => {
      const button = screen.getByText('Remove Two Options');
      expect(button).toBeTruthy();
    }, 1000)
  });
  it('Should exist in quiz page after data loads', () => {
    render(<QuizPage />);
    setTimeout(() => {
      const button = screen.getByText("Add extra 10 seconds");
      expect(button).toBeTruthy()
    }, 1000)
  });
  it('Should exist in quiz page after data loads', () => {
    render(<QuizPage />);
    setTimeout(() => {
      const button = screen.getByText("Next");
      expect(button).toBeTruthy()
    }, 1000)
  });
})
