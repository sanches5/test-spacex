import { useState } from 'react'
import logo from '../../spacex-header.svg';
import './styles.css'

const links = [
  {
    path: 'home',
    name: 'Главная'
  },
  {
    path: 'technology',
    name: 'Технология'
  },
  {
    path: 'flight-schedule',
    name: 'График Полётов'
  },
  {
    path: 'guarantees',
    name: 'Гарантии'
  },
  {
    path: 'about-company',
    name: 'О компании'
  },
  {
    path: 'contacts',
    name: 'контакты'
  }
]

const Link = ({path, name, className = ''}) => {
  return (<a className={`link ${className}`} href={path}>{name}</a>)
}

const Menu = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(state => !state)

  return (<>
    <div onClick={handleOpen} className={`menu ${open ? 'open' : 'close'}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={`navigation-menu ${open ? 'open-menu' : 'close-menu'}`}>
      {links.map((link, ind) => {
        const { path, name } = link
        return (
            <Link key={ind} path={path} name={name} className={'menu' + path}/>
        )
      })}
    </div>
  </>
  )
}


const Header = () => {
    return (
    <header className="app-header">
        <div className='navigation'>
          <img src={logo} alt='logo' className="logo" />
          <ul className='list-navigation'>
            {links.map((link, ind) => {
              const { path, name } = link
              return (
                <li key={ind}>
                  <Link path={path} name={name}/>
                </li>
              )
            })}
          </ul>
        </div>
        <Menu/>
      </header>)
}

export default Header