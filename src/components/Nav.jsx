import React from 'react'
import PokemonTCGLogo from '../assets/Pokemon-TCG-logo.svg'

const Nav = () => {
    return (
        <nav id="navigation">
            <div className="nav__container">
                <img src={PokemonTCGLogo} className="logo" alt="" />
                
            </div>
        </nav>
    )
}

export default Nav
