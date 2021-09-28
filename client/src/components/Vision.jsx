import React from 'react'
import Foto1 from "../images/Foto2.jpg";
import Foto2 from "../images/Foto3.jpg";
import Foto3 from "../images/Foto4.jpg";

const Vision = () => {

    const VisionImg = [

        {
            image: Foto1,
            text: "Proyectos de Compensación"
        },
        {
            image: Foto2,
            text: "Proyectos de Jardinería"
        },
        {
            image: Foto3,
            text: "Proyectos de Paisajismo"
        },
        {
            image: Foto3,
            text: "Consejos y Cuidados"
        }
   ];

    return (
        <div className='Vision'>
            <div className='TextVision'>
                <h1>Visión</h1>
                <p>Somos una empresa ecologicamente responsable que lleva acabo trámites de compensación, 
                    resolviendo tus necesidades de manera natural.</p>
            </div>
            <div className='VisionFlex'>
                {VisionImg.map((item, index)=>{

                    return(
                    <div className='ItemVision'>
                        <div className='ItemImgVision'>
                            <img src={item.image} key={item.index} alt='Proyectos' className='ImgVision'></img>
                        </div>
                        <div className='ItemTextoVision'>
                            <h1>{item.text}</h1>
                        </div>
                    </div>

                    )

                })}
            </div>
        </div>
    )
}

export default Vision
