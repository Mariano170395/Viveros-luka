import React from 'react'
import Logo from '../images/Logo.png'
import IconoFacebook from '../images/IconoFacebook.png'


const NavBar = () => {
    return (
        <div className='NavBarWrap'>
            <div className='NavRedes'>
                <div className='SubdivisionNav'>
                    <h1>Info1</h1>
                    <h1>Info2</h1>
                    <h1>Info3</h1>
                    <h1>Info4</h1>
                </div>
                <div className='SubdivisionNav2'>
                    <a><img src={IconoFacebook}/></a>
                    <a><img src={IconoFacebook}/></a>
                    <a> <img src={IconoFacebook}/></a>
                    <a><img src={IconoFacebook}/></a>
                </div>
            </div>
            <div className="NavLogo">
                <img src={Logo} className='Logo'></img>
            </div>
            <div className="NavBtn">
                <button>Boton1</button>
                <button>Boton2</button>
                <button>Boton3</button>
                <button>Boton4</button>
                <button>Boton5</button>
            </div>
        </div>
    )
}

export default NavBar
