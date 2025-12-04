import './style.css';
import Trash from '../../assets/trash.svg'

function CadastroEpi() {

  return (
    <div className='formContainer'>
      <form>
        <header>Cadastro de EPI</header>
        <input name='nome' type='text' placeholder='Nome' />
        <input name='ca' type='text' placeholder='CA' />
        <button type='button'>Cadastrar</button>
      </form>
      <div className='card'>
        <div className='epi'>
          <p>Nome:</p>
          <span>Ca:</span>
        </div>
        <button>
          <img src={Trash} alt="" />
        </button>
      </div>
    </div>
  )
}

export default CadastroEpi
