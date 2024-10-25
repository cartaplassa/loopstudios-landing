import React from 'react'

import './index.scss'

function Nav({ className }) {
  return (
    <nav className={"nav" + (className ? " " + className : "")}>
        {["About", "Careers", "Events", "Products", "Support"].map((el)=>(
            <a href="#" className="nav__link" key={el}>{el}</a>
        ))}
    </nav>
  )
}

export default Nav