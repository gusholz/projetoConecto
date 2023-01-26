import { useEffect, useRef, useState } from 'react';
import InteracaoMouseZoom from './interacoes/mouseZoom'
import InteracaoP5 from './interacoes/interacao1p5'
import styles from "./interacoes/interacoes.module.css";

export default function AreaInterativa(){
    const numInteracoes = 2;
    const randomNumber = Math.floor((Math.random()*numInteracoes)+1);
    
    const [seletorInteracao,setSeletorInteracao] = useState(<></>)
    const [seletorSeta,setSeletorSeta] = useState(`${styles.seta}`)

    useEffect(()=>{
        if(randomNumber === 1){
            setSeletorInteracao(<InteracaoMouseZoom />);
            setSeletorSeta(`${styles.seta}`)
        }
        
        if(randomNumber === 2){
            setSeletorInteracao(<InteracaoP5 />);
            setSeletorSeta(`${styles.setaP5}`)
        }

    }, []);


    const proximoElemento = () =>{
        window.scrollTo({
            top: (outerHeight),
            behavior:"smooth"
        })
    }

    return(
            <div className={styles.areaInteracao}>
                {seletorInteracao}
                <img onClick={proximoElemento} alt="" className={seletorSeta} src={`images/seta.avif`} />
            </div>
    )
}