import React, {useState} from "react";
import Foto1 from "../images/Foto2.jpg";
import Foto2 from "../images/Foto3.jpg";
import Foto3 from "../images/Foto4.jpg";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {RiMessage2Line} from "react-icons/ri";

const Resenas = () => {
    const imgSlider = [

        {
            image: Foto1,
            nombre: 'Tony',
            comentario: 'Holiwiris' 
        },
        {
            image: Foto2,
            nombre: 'Botas',
            comentario: 'WOOOF' 
        },
        {
            image: Foto3,
            nombre: 'Cumpleaños',
            comentario: 'Amsiedad' 
        }
   ];

   const [current, setCurrent] = useState(0)
   const length = imgSlider.length

   const proxImg = () =>{
       setCurrent( current === length - 1 ? 0 : current + 1 )
   }

   const imgAnt = () =>{
       setCurrent(current === 0 ? length - 1 : current - 1)
   }

   console.log(current);

   if(!Array.isArray(imgSlider) || imgSlider.length <= 0){
       return null;
   }

 return (
   <div className='ResenasWrapper'>
        <FaChevronLeft className="IconIzqRes" onClick={imgAnt}/>
        <FaChevronRight className="IconDerRes" onClick={proxImg}/>
       <div className="Resenas">
            <h1>Reseñas</h1>
       </div>

       {imgSlider.map((slide, index)=>{
           return(
               <div className={index === current ? 'ImgActiva' : 'Img'} key={index}>
                   {index === current && (
                   <div className='CarrRes'>
                       <div className='ImagenResenas'>
                            <img src={slide.image} alt="foto" className='ItemRes'></img>
                       </div>
                       <div className='TextoResena'>
                            <h1 className='Nombre'>{slide.nombre}</h1>
                            <RiMessage2Line className='IconoMsg'/>
                            <h1 className='Comentario'>{`"${slide.comentario}"`}</h1>
                       </div>
                    
                   </div>
                   )}  
               </div>
           )
       })}
   </div>
 );
}

export default Resenas
