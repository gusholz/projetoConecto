import React, { useState } from 'react';
import { ativadorHeader } from '../../commons/functions';
import styles from './AreaInterativa.module.css'

export default function AreaInterativa(){

    const [showHeader,setShowHeader] = useState(true);

    let estilo:string;

    if(showHeader === true){
        estilo = styles.espacoInterativoAtivo;
    }else{
        estilo = styles.espacoInterativo;
    }

    console.log(estilo);

    return(
        <div className={styles.areaInterativa}>
            <canvas onMouseOut={()=>{ativadorHeader}} onMouseEnter={()=>setShowHeader(true)} onMouseLeave={()=>setShowHeader(false)} className={`${estilo}`}>
            </canvas>
        </div>

    )
}