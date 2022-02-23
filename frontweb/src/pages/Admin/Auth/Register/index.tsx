import { useForm } from 'react-hook-form';
import { UserRegister } from 'types/user';
import './styles.css';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegister>();

  const onSubmit = () => {};

  return (
    <div className="base-card register-container">
      <h1 className="register-title">Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <input
            {...register('firstName', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className={`form-control base-input ${
              errors.firstName ? 'is-invalid' : ''
            }`}
            placeholder="Nome"
            name="firstName"
          />
          <div className="invalid-feedback d-block">
            {errors.email?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('lastName', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className={`form-control base-input ${
              errors.lastName ? 'is-invalid' : ''
            }`}
            placeholder="Sobrenome"
            name="lastName"
          />
          <div className="invalid-feedback d-block">
            {errors.lastName?.message}
          </div>
        </div>

        <div className="mb-2">
          <input
            {...register('email', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.email ? 'is-invalid' : ''
            }`}
            placeholder="Email"
            name="email"
          />
          <div className="invalid-feedback d-block">
            {errors.email?.message}
          </div>
        </div>

        <div className="mb-2">
          <input
            {...register('password', {
              required: 'Campo obrigatório',
            })}
            type="password"
            className={`form-control base-input ${
              errors.password ? 'is-invalid' : ''
            }`}
            placeholder="password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <div className="btn-register-container">
          <button className="btn btn-primary text-white btn-register">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
