import { ReactComponent as Searchicon } from 'assets/images/searchIcon.svg';
import './styles.css';

const ProductFilter = () => {
  return (
    <div className="base-card product-filter-container">
      <form className="product-filter-form">
        <div className="product-filter-name-container">
          <input
            type="text"
            className="form-control"
            placeholder="Nome do produto"
          />
          <Searchicon />
        </div>
        <div className="product-filter-bottom-container">
          <div className="product-filter-category-container">
            <select name="" id="">
              <option value="" key="">
                Livros
              </option>
            </select>
          </div>
          <button className="btn btn-outline-secondary">LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
