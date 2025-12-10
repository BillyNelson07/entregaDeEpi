import '../CadastroEpi/style.css';
import Trash from '../../assets/trash.svg';
import { useNavigate } from 'react-router-dom';

function CadastroEpi() {

  const navigate = useNavigate();

  return (
    <div className='formContainer'>
      <header>
        <button className='homeButton' onClick={() => navigate('/')}>Início</button>
      </header>
      <form>
        <header>Cadastro de EPI</header>
        <input name='nome' type='text' placeholder='Nome' />
        <input name='ca' type='text' placeholder='CA' />
        <button type='button'>Cadastrar</button>
      </form>
      <div className='epiCards'>
        <div className='epiCard'>
          <div>
            <p>Nome: Protetor Auricular</p>
            <span>Ca: 5475</span>
          </div>
          <button id='trash'>
            <img src={Trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CadastroEpi
