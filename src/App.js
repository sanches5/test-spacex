import logo from './spacex-header.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className='navigation'>
          <img src={logo} alt='logo' className="logo" />
          <ul className='list-navigation'>
            <li>
              <a className="link" href="home">Главная</a>
            </li>
            <li>
              <a className="link" href="technology">Технология</a>
            </li>
            <li>
              <a className="link" href="flight-schedule">График Полётов</a>
            </li>
            <li>
              <a className="link" href="guarantees">Гарантии</a>
            </li>
            <li>
              <a className="link" href="about-company">О компании</a>
            </li>
            <li>
              <a className="link" href="contacts">контакты</a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <main className='main'>
        <div className="titles">
          <div className='title'>
            <h1>ПУТЕШЕСТВИЕ</h1>
            <h2>на красную планету</h2>
          </div>
          <div className='button-start'>
            <button className="btn-8">Начать путишествие</button>
            <img src="rocket-test.png" alt="rocket" className='rocket' />
          </div>
        </div>
        <div className="info">
        <div  className="moon" ></div>
        <div className="buttons">
         <button className='btn-1'>
          мы
          <h1>1</h1>
          на рынке
         </button>
         <button className='btn-2'>
          гарантируем
          <h1>50%</h1>
          безопасность
         </button>
         <button className='btn-3'>
          календарик за
          <h1>200</h1>г.
          безопасность
         </button>
         <button className='btn-4'>
          путишествие
          <h1>597</h1>
          дней
         </button>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
