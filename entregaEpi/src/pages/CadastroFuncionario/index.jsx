import './style.css';
import Trash from '../../assets/trash.svg';
import { useNavigate } from 'react-router-dom';

function CadastroFuncionario() {

  const navigate = useNavigate();

  return (
    <div className='formContainer'>
      <header>
        <button className='homeButton' onClick={() => navigate('/')}>Início</button>
      </header>
      <form>
        <header>Cadastro de Funcionário</header>
        <input name='nome' type='text' placeholder='Nome' />
        <button type='button'>Cadastrar</button>
      </form>
      <div className='funcionarioCards'>
        <div className='funcionarioCard'>
          <div>
            <p>Nome: Gabriel Eduardo</p>
          </div>
          <button id='trash'>
            <img src={Trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CadastroFuncionario
