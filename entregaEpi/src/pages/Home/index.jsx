import './style.css';
import Trash from '../../assets/trash.svg'

function Home() {

    return (
        <div className='home'>
            <header>
                <button className='homeButton'>Início</button>
            </header>
            <navigator>
                <header>Entrega de EPI</header>
                <button type='button'>Cadastrar Funcionário</button>
                <button type='button'>Cadastrar EPI</button>
            </navigator>
            <div className='cards'>
                <div className='card'>
                    <p>Gabriel Eduardo</p>
                </div>
                <div className='card'>
                    <p>Gabriel Eduardo</p>
                </div>
                <div className='card'>
                    <p>Gabriel Eduardo</p>
                </div>
            </div>
        </div>
    )
}

export default Home;