import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from 'types/category';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import CategoryCrudCard from '../CategoryCrudCard';
import './styles.css';

const CategoriesList = () => {
  const [page, setPage] = useState<SpringPage<Category>>();

  const getCategories = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/categories',
      withCredentials: true,
      params: {
        size: 3,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <Link to="/admin/categories/create">
        <button className="btn btn-primary text-white btn-crud-add">
          ADICIONAR{' '}
          <span className="new-category-text-button">NOVA CATEGORIA</span>
        </button>
      </Link>
      {page?.content.map((category) => (
        <div key={category.id}>
          <CategoryCrudCard category={category} onDelete={getCategories} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
