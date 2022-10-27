import React from 'react';
import styles from './Conteudo.module.css'
import PostInteracao from './postInteracoes/postInteracao';

export default function ConteudoInteracoes(){
    return (
        <div className={styles.containerPosts}>
            <PostInteracao 
                srcImg="testeTelas"
                titulo="Dia das Crianças"
                subtitulo='Interações divertidas?'
                data='15/10/22'
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos, 
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim, p"
            />
           <PostInteracao 
                srcImg="testeTelas"
                titulo="Dia das Crianças"
                subtitulo='Interações divertidas?'
                data='15/10/22'
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos, 
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim, p"
            />
            <PostInteracao
                srcImg="testeTelas"
                titulo="Dia das Crianças"
                subtitulo='Interações divertidas?'
                data='15/10/22'
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos, 
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim, p"
            />
        </div>
    )
}