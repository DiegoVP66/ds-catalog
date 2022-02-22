import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Category } from 'types/category';
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  categoryId: string;
};

const CategoryForm = () => {
  const history = useHistory();

  const { categoryId } = useParams<UrlParams>();

  const isEditing = categoryId !== 'create';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Category>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/categories/${categoryId}` }).then((response) => {
        const category = response.data as Category;
        setValue('name', category.name);

        console.log(response.data);
      });
    }
  }, [isEditing, categoryId, setValue]);

  const onSubmit = (formData: Category) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/categories/${categoryId}` : '/categories',
      data: data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Categoria cadastrada com sucesso');
        history.push('/admin/categories');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Erro ao cadastrar categoria');
      });
  };

  const handleCancel = () => {
    history.push('/admin/categories');
  };
  return (
    <div className="base-card category-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="category-container">
          <label className="d-none" htmlFor="categories">
            Nome da Categoria
          </label>
          <input
            {...register('name', {
              required: 'Campo obrigatório',
            })}
            className={`form-control base-input input-box ${
              errors.name ? 'is-invalid' : ''
            }`}
            name="name"
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
