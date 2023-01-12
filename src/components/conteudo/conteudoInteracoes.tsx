import React from 'react';
import styles from './Conteudo.module.css'
import PostInteracao from './postInteracoes/postInteracao';

export default function ConteudoInteracoes(props:{tamanhoFonte:number,darkMode:boolean}){

    let backgroundColor = 0;
    if(props.darkMode === true){
        backgroundColor = 1;
    }else{
        backgroundColor = 0;
    }

    return (
        <div className={styles.containerPosts}>
            <PostInteracao 
                srcImg="drop1telas"
                titulo="Areia como elemento simbólico"
                subtitulo='Captura de movimento como um meio de detectar a ação humana'
                data='17/10/22'
                texto="
                    A areia, que se disperça facilmente com o vento, 
                    foi o elemento simbólico da interação, utilizando-se da silhueta de uma pessoa como referência para possibilitar uma ação
                    interativa com as fotografias que estão em outra camada. Esse contato, tem como significado representativo, de que a partir
                    da presença de uma pessoa, é possível fazer um recorte no tempo e na memória, e na medida em que esse corpo ocupa esse espaço,
                    ele segmenta a existência e a memória da vila dos pescadores.
                    "
                tamanhoFonte={props.tamanhoFonte} 
                bgColor ={backgroundColor}   
            />
            <PostInteracao
                srcImg="arduino"
                titulo="Arduino e RFID"
                subtitulo='Controle de projeção por radiofrequência'
                data='17/10/22'
                texto="
                    O uso de placas de arduino e seus módulos possuem diversas utilidades, desde lâmpadas inteligentes até controladores de irrigação para jardinagem.
                    O seu uso foi muito importante para que fosse possível alcançar o resultado desejado nos experimentos, mas mais importante que isso, criar uma ferramenta
                    que pudesse suportar outras propostas. Para isso, foi usado dois módulos de radiofrequência (RFID RC522), conectados a uma placa de Arduino Uno, que conseguem
                    ler quando um cartão de radiofrequência se aproxima, identificar qual cartão foi lido e qual módulo o leu, mandando a informação para outros softwares, como o
                    TouchDesigner para mudar a imagem em uma projeção, como foi usado, ao utilizar um desses cartões dentro de um impresso 3D.
                    "
                tamanhoFonte={props.tamanhoFonte}
                bgColor ={backgroundColor}   
            />
           <PostInteracao 
                srcImg="concept"
                titulo="Desenvolvimento de uma Narrativa Engajante"
                subtitulo='Representatividade da vila do Mucuripe em narrativas'
                data='15/09/22'
                texto="
                    A criação de uma narrativa para guiar o processo de desenvolvimento das nossas instalações e experiências foi um ponto importante do nosso processo. Para isso, essa história precisava ser: 
                    Baseada em um contexto e uma problemática real, para que as experiências pudessem oferecer reflexões relevantes;
                    Simples e abstrata, para que pudesse dar origem a muitas ideias sem fortes limitações lógicas ou estéticas. 
                    Assim, resolvemos explorar o contexto e a cultura da vila de pescadores do Mucuripe (Fortaleza - CE), explorando a sua história e a manutenção da sua memória ameaçada pela especulação imobiliária.
                    A história foi então dividida em 7 partes e acompanha um pescador e a sua filha, intermediada pela lenda de um peixe místico.
                    "
                tamanhoFonte={props.tamanhoFonte}
                bgColor ={backgroundColor}       
            />
        </div>
    )
}
