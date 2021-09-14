import React, {useState} from "react";
import Foto1 from "../images/Foto2.jpg";
import Foto2 from "../images/Foto3.jpg";
import Foto3 from "../images/Foto4.jpg";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

/*Se instalo react icons*/

/*npm install react-icons --save*/
const Carrousel = () => {

    const imgSlider = [

         {
             image: Foto1
         },
         {
             image: Foto2
         },
         {
             image: Foto3
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
    <div className="Carrusel">
        <FaChevronLeft className="IconIzq" onClick={imgAnt}/>
        <FaChevronRight className="IconDer" onClick={proxImg}/>
        {imgSlider.map((slide, index)=>{
            return(
                <div className={index === current ? 'ImgActiva' : 'Img'} key={index}>
                    {index === current && (<img src={slide.image} alt="foto" className='Item'></img>)}  
                </div>
            )
        })}
    </div>
  );
};

export default Carrousel;
