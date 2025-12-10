import './style.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <navigator>
                <header>Entrega de EPI</header>
                <button type='button' onClick={() => navigate('/cadastro-funcionario')}>Cadastrar Funcionário</button>
                <button type='button' onClick={() => navigate('/cadastro-epi')}>Cadastrar EPI</button>
            </navigator>
            <div className='homeCards'>
                <div className='homeCard'>
                    <p>Gabriel Eduardo</p>
                </div>
            </div>
        </div>
    )
}

export default Home;