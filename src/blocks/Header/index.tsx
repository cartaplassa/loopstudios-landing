import { Collapse } from 'react-collapse'
import { useState } from 'react'

import './index.scss'
import Logo from '/logo.svg'
import Menu from '/icon-hamburger.svg'
import Nav from '@components/Nav'


function Header() {
  const [isNavVisible, setNavVisible] = useState(false);
  const toggleNavVisible = () => setNavVisible(!isNavVisible);

  return (
    <div className='start'>
        <header className='header'>
            <img src={Logo} alt="Loopstudios logo" />
            <img src={Menu} alt="Menu" onClick={toggleNavVisible} />
        </header>
        <Collapse isOpened={isNavVisible}>
          <Nav className="start__nav"/>
        </Collapse>
        <div className="start__wrapper">
            <h1 className='start__h1'>Immersive experiences that deliver</h1>
        </div>
    </div>
  )
}

export default Header