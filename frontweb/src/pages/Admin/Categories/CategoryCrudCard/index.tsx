import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Category } from 'types/category';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  category: Category;
  onDelete: Function;
};

const CategoryCrudCard = ({ category, onDelete }: Props) => {
  const handleDelete = (categoryId: number) => {
    if (
      !window.confirm(
        `Tem certeza que deseja deletar a categoria ${category.name}?`
      )
    ) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/categories/${categoryId}`,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        onDelete();
      })
      .catch((error) => {
        console.log(error);
        toast.error('Erro ao tentar deletar categoria');
      });
  };
  return (
    <div className="category-crud-card base-card">
      <span className="category-name">{`${category.name}`}</span>
      <div className="category-button-container">
        <button
          className="btn btn-outline-danger category-crud-card-button"
          onClick={() => handleDelete(category.id)}
        >
          EXCLUIR
        </button>
        <Link to={`/admin/categories/${category.id}`}>
          <button className="btn btn-outline-secondary category-crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCrudCard;
