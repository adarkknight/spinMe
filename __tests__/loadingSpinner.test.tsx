import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LoadingSpinner from '../app/components/loadingSpinner'
 
describe('Loading Spinner', () => {
    test('renders loading spinner', () => {
      const {container} = render(<LoadingSpinner />);
      const spinnerElement = container.firstChild;
      expect(spinnerElement).toBeInTheDocument();
    });
  });