import Link from 'next/link';
import React, { useEffect,useState } from 'react';
import BlocoTextoHome from './blocoTextoHome/blocoTextoHome/blocoTextoHome'
import styles from './Conteudo.module.css'

export default function ConteudoHome(props:{tamanhoFonte:number,darkMode:boolean}){

    const [blinking,setBlinking] = useState("Sobre");
    const [blinking2,setBlinking2] = useState("Como");
    
    //Tempo em milisegundos do efeito de digitando
    const tempoEfeitoBlinking = 750;
    let verificador = 0;
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(verificador % 2 === 0){
                setBlinking("Sobre");
                setBlinking2("Como");
            }else{
                setBlinking("Sobre|");
                setBlinking2("Como|");
            }
            verificador++;
            if(verificador === 100){
                verificador=0;
            }
        }, tempoEfeitoBlinking);
      
        return () => clearInterval(interval);
      }, []);

    let backgroundColor = 0;
    if(props.darkMode===true){
        backgroundColor = 1;
    }else{
        backgroundColor = 0;
    }

    return (
        <>
            <Link href='https://www.instagram.com'><a className={styles.link} target="_blank"><img className={styles.logo} alt='Link do Instagram do projeto Co.necto'src={`images/logoInstagram.svg`}></img></a></Link>
            <div className={styles.containerHome}>
                <BlocoTextoHome titulo= {blinking} img= 'membrosConecto'bgColor= {backgroundColor} tamanhoFonte= {props.tamanhoFonte} >
                    Na atualidade, é evidente o entrelaçamento da tecnologia em diversos aspectos do cotidiano. A contextualização desse fenômeno revela questionamentos sobre a tangibilidade e as aplicações das interfaces digitais em relação ao comportamento humano. 
                    Nesse sentido, o projeto Conecto, vinculado ao Museu da Imagem do Som do Ceará (MIS-CE) e a Universidade Federal do Ceará
                    (UFC) se materializa a partir dessas reflexões, compreendendo a capacidade dos museus de provocar experiências multissensoriais
                    que relacionam aspectos subjetivos, evidenciando dramas e dilemas essencialmente humanos - para além de enfoques meramente racionais,
                    intencionamos investigar o museu como espaço de criação de narrativas colaborativas com os visitantes.
                </BlocoTextoHome>
                <BlocoTextoHome titulo= {blinking2} img= 'interacaoProjecao' bgColor= {backgroundColor} tamanhoFonte= {props.tamanhoFonte}>
                    Ao se utilizar de diversos recursos tecnológicos como a realidade aumentada, a captação de movimento, 
                    a captação de som, a projeção, dentre tantos outros, nossa equipe multidisciplinar de programadores, designers, arquitetos e storytellers almeja criar uma experiência
                    interativa única com os usuários no ambiente museulógico do MIS, mas também fora dele, levando essas interações para áreas não habituadas a utilizar estas tecnologias"     
                </BlocoTextoHome>
                <BlocoTextoHome titulo= "Para Quem?" img= 'procisaoSaoPedro' bgColor= {backgroundColor} tamanhoFonte= {props.tamanhoFonte}>
                    Desde o início, com base na nossa proposta, buscamos alcançar toda as regiões da cidade de Fortaleza, especialmente aquelas em que a população está menos habituados a se utilizar
                    de recursos tecnológicos, com o intuito máximo de criar uma experiência interativa rica, que possibilite sensações, comportamentos e reflexões nos participantes. 
                    Neste primeiro momento, estamos trabalhando em conjunto com a comunidade do Mucuripe, salvaguardando seus laços e suas práticas culturais a partir de nossa atuação conjunta. 
                </BlocoTextoHome>
            </div>
        </>
    )
};