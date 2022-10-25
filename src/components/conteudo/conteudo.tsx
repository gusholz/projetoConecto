import React from 'react';
import BlocoTextoHome from '../blocoTextoHome/blocoTexto';
//import styles from './Conteudo.module.css'
//className={styles.bg}

export default function Conteudo(){
    return (
        <div >
            <BlocoTextoHome titulo="Sobre"/>
            <BlocoTextoHome titulo="Como?"/>
            <BlocoTextoHome titulo="Para quem?"/>
        </div>
    )
}