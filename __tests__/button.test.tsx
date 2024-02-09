import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '../app/components/button'
 
describe('Button', () => {
    it('renders a button with provided text prop', () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} text='save' />);
      expect(screen.getByText('save')).toBeInTheDocument();
    });
  });