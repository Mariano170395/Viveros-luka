import React, {useState} from "react";
import Foto1 from "../images/Foto1.jpg";
import Foto2 from "../images/Foto2.jpg";
import Foto3 from "../images/Foto3.jpg";
import Foto4 from "../images/Foto4.jpg";
import { ReactComponent as FlechaIzquierda } from "../images/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDerecha } from "../images/iconmonstr-angel-right-thin.svg";

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
        },
        {
            image: Foto4
        }
    ];

    const [current, setCurrent] = useState(0)
    const length = imgSlider.length

  return (
    <div className="Carrusel">
        <FlechaIzquierda className="FlechaIzq"/>
        <FlechaDerecha className="FlechaDer"/>
        {imgSlider.map((slide, index)=>{
            return(
                <img src={slide.image} alt="foto" className='Item'></img>
            )
        })}
    </div>
  );
};

export default Carrousel;
