import './style.css';
import Trash from '../../assets/trash.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAllFuncionarios, postFuncionario, deleteFuncionario } from '../../../../server/controllers/funcionarioController';


function CadastroFuncionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  // Buscar funcionários ao carregar a página
  useEffect(() => {
    const carregarFuncionarios = async () => {
      const dados = await getAllFuncionarios();
      setFuncionarios(dados);
    };
    carregarFuncionarios();
  }, []);

  return (
    <div className='formContainer'>
      <header>
        <button className='homeButton' onClick={() => navigate('/')}>Início</button>
      </header>
      <form>
        <header>Cadastro de Funcionário</header>
        <input name='nome' type='text' placeholder='Nome' value={nome} />
        <button type='button'>Cadastrar</button>
      </form>

      <div className='funcionarioCards'>
        {funcionarios.map((funcionario) => (
          <div className='funcionarioCard' key={funcionario.id_func}>
            <div>
              <p>{funcionario.nome}</p>
            </div>
            <button id='trash'>
              <img src={Trash} alt="" />
            </button>
          </div>
        ))}

      </div>

    </div>
  )
}

export default CadastroFuncionario
