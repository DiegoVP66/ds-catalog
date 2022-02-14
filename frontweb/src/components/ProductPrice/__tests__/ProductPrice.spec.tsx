import { render, screen } from '@testing-library/react';
import ProductPrice from '..';

describe('ProductPrice', () => {
  test('should render ProductPrice', () => {
    const result = 1200;

    render(<ProductPrice price={result} />);

    expect(screen.getByText('R$')).toBeInTheDocument();
    expect(screen.getByText('1.200,00')).toBeInTheDocument();
  });
});
