import React from 'react';
import BlocoTextoHome from './blocoTextoHome/blocoTextoHome/blocoTextoHome'
import styles from './Conteudo.module.css'

export default function ConteudoHome(){
    return (
        <div className={styles.containerHome}>
            <BlocoTextoHome 
                titulo="Sobre"
                texto="Na atualidade, é evidente o entrelaçamento da tecnologia em diversos aspectos do cotidiano. 
                    A contextualização desse fenômeno revela questionamentos sobre a tangibilidade e as aplicações das
                    interfaces digitais em relação ao comportamento humano. Nesse sentido, o projeto Conecto se materializa a
                    partir dessas reflexões, compreendendo a capacidade dos museus de provocar experiências multissensoriais
                    que relacionam aspectos subjetivos, evidenciando dramas e dilemas essencialmente humanos – para além de enfoques meramente racionais,
                    intencionamos investigar o museu como espaço de criação de narrativas colaborativas com os visitantes"
                alinhamento='esquerda'
                imagem='images/vetorLogoConecto.png'                
            />
            <BlocoTextoHome 
                titulo="Como?"
                texto="Com essa premissa, são utilizas diversas ferramentas de interação, como a realidade aumentada, a projeção,
                    a captura de movimento, a captura de som, dentre tantas outras, sempre como um meio de criar experiências ricas,
                    e não enquanto um fim em si mesmo"
                alinhamento='direita'
                imagem='images/vetorLogoConecto.png'       
            />
            <BlocoTextoHome 
                titulo="Para Quem?"
                texto="O projeto almeja atingir públicos diversos, que não estão habituadas a interagir com a tecnologia
                de um modo engajante, e possibilitador novas experiencias e reflexões a partir destas interações. Além disso,
                busca atuar com as comunidades locais fora do ambiente museológico, particularmente atuando junto da comunidade do Mucuripe"
                alinhamento='esquerda'
                imagem='images/procisaoSaoPedro.jpg'       
            />
        </div>
    )
}