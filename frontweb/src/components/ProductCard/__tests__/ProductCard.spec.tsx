import { render, screen } from '@testing-library/react';
import ProductCard from '..';
import { Product } from 'types/product';

describe('ProductCard', () => {
  test('should render ProductCard', () => {
    const product: Product = {
      name: 'Computer',
      price: 3000.00,
      imgUrl: 'https://img.com',
    } as Product;

    render(<ProductCard product={product} />);

    expect(screen.getByText('R$')).toBeInTheDocument();
    expect(screen.getByText('3.000,00')).toBeInTheDocument();
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
  });
});
