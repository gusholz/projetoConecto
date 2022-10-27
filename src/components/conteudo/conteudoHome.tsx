import React from 'react';
import BlocoTextoHome from './blocoTextoHome/blocoTextoHome/blocoTextoHome'
import styles from './Conteudo.module.css'

export default function ConteudoHome(){
    return (
        <div className={styles.containerHome}>
            <BlocoTextoHome 
                titulo="Sobre"
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos,
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim."
            />
            <BlocoTextoHome 
                titulo="Como?"
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos,
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim."
            />
            <BlocoTextoHome 
                titulo="Para Quem?"
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos,
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim."
            />
        </div>
    )
}