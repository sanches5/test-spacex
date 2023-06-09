import './styles.css'
import ROCKET from '../../rocket-test.png'

const Main = () => {
    return (
    <main className='main'>
        <div className="titles">
            <div className='title'>
                <h1>ПУТЕШЕСТВИЕ</h1>
                <h2>на красную планету</h2>
            </div>
            <div className='start'>
                <button className="button-start">Начать путишествие</button>
                <img src={ROCKET} alt="rocket" className='rocket'/>
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
  )
}

export default Main