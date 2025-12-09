import './style.css';
import Trash from '../../assets/trash.svg'

function CadastroFuncionario() {

  return (
    <div className='formContainer'>
      <header>
        <button>Início</button>
      </header>
      <form>
        <header>Cadastro de Funcionário</header>
        <input name='nome' type='text' placeholder='Nome' />
        <button type='button'>Cadastrar</button>
      </form>
      <div className='cards'>
        <div className='card'>
          <div>
            <p>Nome: Gabriel Eduardo</p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
        <div className='card'>
          <div>
            <p>Nome: Gabriel Eduardo</p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CadastroFuncionario
