import React from 'react'
// import emailjs from "emailjs-com"

const Contacto = () => {


    /*Se debe instalar emailjs*/
    /*npm install emailjs-com --save*/

    // function sendEmail (e){
    //     e.preventDefault();

    //     emailjs.sendForm(
    //         'service_6732cad', 
    //         'template_n7jledn', 
    //         e.target, 
    //         'user_tvSW5gG9Gc432QuyoBnyx'
    //     ).then(res=>{
    //         console.log(res);
    //     }).catch(err=>console.log(err)) 
    // }



    return (
        <div className="Contact">
            <div className='ContactoFlex'>
                <div className='ImagenContacto'>
                    
                </div>
                <div className="FormContacto">
                    <div className='ContactoTextoFlex'>
                        <h1 className='Contactanos'>Contáctanos</h1>
                        <h1 className='Contactanos2'>We don’t cut corners to maximize our profit</h1>
                    </div>
                <form className='ContactoInputs'>
                    <input type="text" name="nombre" className="nombre"  placeholder="Nombre *" required></input>
                    <input type="text" name="apellidos" className="apellidos"  placeholder="Apellidos *" required></input>
                    <input type="email" name="emailUsuario" className="correo"  placeholder="E-mail *" required></input>
                    <input type="number" name="numTelefono" className="telefono"  placeholder="Telefono *" required></input>
                    <textarea type="text" name="mensaje" className="mensaje"  placeholder="Mensaje"></textarea>
                    <button className="enviar" type="submit" onClick={()=>{ alert('Gracias, se ha enviado tu mensaje. Nos contactaremos contigo pronto'); }}>Enviar</button>
                </form>
                </div>
            </div>
            {/* <form onSubmit={sendEmail}> */}

        </div>
    )
}
export default Contacto