import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from 'types/category';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import CategoryCrudCard from '../CategoryCrudCard';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
};

const CategoriesList = () => {
  const [page, setPage] = useState<SpringPage<Category>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };

  const getCategories = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/categories',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 5,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <Link to="/admin/categories/create">
        <button className="btn btn-primary text-white btn-crud-add mb-2">
          ADICIONAR{' '}
          <span className="new-category-text-button">NOVA CATEGORIA</span>
        </button>
      </Link>

      {page?.content.map((category) => (
        <div key={category.id}>
          <CategoryCrudCard category={category} onDelete={getCategories} />
        </div>
      ))}
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={0}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CategoriesList;
