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
                titulo="Desenvolvimento de uma Narrativa Engajante"
                subtitulo='Representatividade da vila do Mucuripe em narrativas'
                data='15/09/22'
                texto="A criação de uma narrativa para guiar o processo de desenvolvimento das nossas instalações e experiências foi um ponto importante do nosso processo. Para isso, essa história precisava ser: 
                Baseada em um contexto e uma problemática real, para que as experiências pudessem oferecer reflexões relevantes;
                Simples e abstrata, para que pudesse dar origem a muitas ideias sem fortes limitações lógicas ou estéticas. 
                Assim, resolvemos explorar o contexto e a cultura da vila de pescadores do Mucuripe (Fortaleza - CE), explorando a sua história e a manutenção da sua memória ameaçada pela especulação imobiliária.
                A história foi então dividida em 7 partes e acompanha um pescador e a sua filha, intermediada pela lenda de um peixe místico."
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
