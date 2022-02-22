import './styles.css';
const Register = () => {
  return (
    <div className="base-card register-container">
      <h1 className="register-title">Cadastro</h1>
      <form>
        <div className="mb-2">
          <input
            type="text"
            className="base-input form-control"
            placeholder="Nome"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="base-input form-control"
            placeholder="Sobrenome"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="base-input form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="base-input form-control"
            placeholder="password"
          />
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
