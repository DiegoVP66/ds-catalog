import { useHistory } from 'react-router-dom';
import './styles.css';
const CategoryForm = () => {
  const history = useHistory();

  const handleCancel = () => {
    history.push('/admin/categories');
  };
  return (
    <div className="base-card category-form-container">
      <form>
        <div className="category-container">
          <label className="d-none" htmlFor="categories">
            Nome da Categoria
          </label>
          <input
            className="form-control base-input input-box"
            name="categories"
            placeholder="Digite o nome da categoria"
          />

          <div className="category-form-buttons-container">
            <button className="btn btn-outline-danger" onClick={handleCancel}>
              CANCELAR
            </button>
            <button className="btn btn-primary text-white">SALVAR</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
