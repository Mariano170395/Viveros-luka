import React from 'react'
import Isotipo from '../images/Isotipo.png'



const NavBar = () => {
    return (
        <div className='NavBarWrap'>
            <div className='NavRedes'>
                <div className='SubdivisionNav'>
                    <h1>+ (123) 1800-567-8990</h1>
                    <h1>Mon - Fri: 9:00 - 19:00 / Closed on Weekends</h1>
                    <h1>office@example.com</h1>
                </div>
            </div>
            <div className="NavLogo">
                <div className='NavLgo'>
                    <img src={Isotipo} className='Logo' alt="Logo"></img>
                </div>
                <div className='NavBtns'>
                    <button>Inicio</button>
                    <button>Sobre Nosotros</button>
                    <button>Servicios</button>
                    <button>Productos</button>
                    <button>Reseñas</button>
                    <button>Galería</button>
                    <button>Contáctanos</button>
                </div>
                
            </div>
            {/* <div className="NavBtn">
                <button>Boton1</button>
                <button>Boton2</button>
                <button>Boton3</button>
                <button>Boton4</button>
                <button>Boton5</button>
            </div> */}
        </div>
    )
}

export default NavBar
