import './index.scss'
import Logo from '/logo.svg'
import Menu from '/icon-hamburger.svg'

function Header() {
  return (
    <header className='header'>
        <nav className='nav'>
            <img src={Logo} alt="Loopstudios logo" />
            <img src={Menu} alt="Menu" />
        </nav>
        <div className="header__wrapper">
            <h1 className='header__h1'>Immersive experiences that deliver</h1>
        </div>
    </header>
  )
}

export default Header