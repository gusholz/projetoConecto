import React from 'react';
import styles from './Conteudo.module.css'
import PostInteracao from './postInteracoes/postInteracao';

export default function ConteudoInteracoes(){
    return (
        <div className={styles.containerPosts}>
            <PostInteracao 
                srcImg="drop1telas"
                titulo="Areia como elemento simbólico"
                subtitulo='Captura de movimento como um meio de detectar a ação humana'
                data='17/10/22'
                texto="A areia, que se disperça facilmente com o vento, 
                foi o elemento simbólico da interação, utilizando-se da silhueta de uma pessoa como referência para possibilitar uma ação
                interativa com as fotografias que estão em outra camada. Esse contato, tem como significado representativo, de que a partir
                da presença de uma pessoa, é possível fazer um recorte no tempo e na memória, e na medida em que esse corpo ocupa esse espaço,
                ele segmenta a existência e a memória da vila dos pescadores."
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
