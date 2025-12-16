import './style.css';
import Trash from '../../assets/trash.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3001/funcionario';

function CadastroFuncionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  // Função para buscar a lista de funcionários (GET)
  const fetchFuncionarios = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL);

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: Falha ao buscar dados.`);
      }
      
      const responseData = await response.json();
      
      const funcionariosArray = responseData.Resultado;

      if (Array.isArray(funcionariosArray)) {
        setFuncionarios(funcionariosArray);
      } else {
        console.error("A API retornou um formato inesperado ou 'Resultado' não é um array:", responseData);
        setError('Formato de dados do servidor inválido.');
        setFuncionarios([]); 
      }

    } catch (err) {
      console.error('Falha ao buscar funcionários:', err.message);
      setError('Não foi possível carregar os dados. Verifique a conexão com o servidor.');
      setFuncionarios([]); 
    } finally {
      setLoading(false);
    }
  };

  // Função para cadastrar um novo funcionário (POST)
  const handleCadastro = async (e) => {
    e.preventDefault(); 
    if (!nome.trim()) {
      alert('O nome não pode estar vazio.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome }),
      });

      if (!response.ok) {
        const errorData = response.headers.get('content-type')?.includes('application/json') 
                           ? await response.json() 
                           : { message: response.statusText };
        throw new Error(`Erro ao cadastrar: ${errorData.message || response.statusText}`);
      }

      setNome(''); 
      await fetchFuncionarios(); 

    } catch (err) {
      console.error('Falha ao cadastrar funcionário:', err.message);
      setError(`Falha no cadastro: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Função para remover um funcionário pelo ID (DELETE)
  const handleRemover = async (id_func) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/${id_func}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Erro ao remover: ${response.statusText}`);
      }

      setFuncionarios(funcionarios.filter(f => f.id_func !== id_func));
      
    } catch (err) {
      console.error('Falha ao remover funcionário:', err.message);
      setError(`Falha na remoção: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };


  // Efeito que carrega os dados quando o componente é montado
  useEffect(() => {
    fetchFuncionarios();
  }, []); 

  // --- Renderização ---

  return (
    <div className='formContainer'>
      <header>
        <button className='homeButton' onClick={() => navigate('/')}>Início</button>
      </header>

      <form onSubmit={handleCadastro}>
        <header>Cadastro de Funcionário</header>
        <input 
          name='nome' 
          type='text' 
          placeholder='Nome' 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          disabled={loading}
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Processando...' : 'Cadastrar'}
        </button>
      </form>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      
      <div className='funcionarioCards'>
        {loading && funcionarios.length === 0 && <p>Carregando dados...</p>}
        
        {Array.isArray(funcionarios) && funcionarios.map((funcionario) => (
          <div className='funcionarioCard' key={funcionario.id_func}>
            <div>
              <p>{funcionario.nome}</p> 
            </div>
            <button id='trash' onClick={() => handleRemover(funcionario.id_func)} disabled={loading}>
              <img src={Trash} alt="Remover" />
            </button>
          </div>
        ))}

        {!loading && Array.isArray(funcionarios) && funcionarios.length === 0 && !error && (
            <p style={{ textAlign: 'center' }}>Nenhum funcionário cadastrado.</p>
        )}

      </div>
    </div>
  )
}

export default CadastroFuncionario;