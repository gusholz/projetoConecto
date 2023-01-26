import React from 'react';
import styles from './Header.module.css';

export default function Header(props:{ativo:number,setTamanhoFonte:Function,tamanhoFonte:number,setDarkMode,darkMode:boolean}){

    let home = `${styles.itemMenu}`;
    let interacoes = `${styles.itemMenu}`;
    let documentacao = `${styles.itemMenu}`;

        if(props.ativo === 1){
            props.ativo === 1 ? home = `${styles.itemMenuAtivo}` : home = `${styles.itemMenu}`;
        }
        if(props.ativo === 2){
            props.ativo === 2 ? interacoes = `${styles.itemMenuAtivo}` : interacoes = `${styles.itemMenu}`;
        }
        if(props.ativo === 3){
            props.ativo === 3 ? documentacao = `${styles.itemMenuAtivo}` : documentacao = `${styles.itemMenu}`;
        }

        const handleIncrease = () => {
            if(props.tamanhoFonte<28){
                props.setTamanhoFonte(prevFontSize => prevFontSize + 2);
            }
      
        }

        const handleDecrease = () => {
            if(props.tamanhoFonte>18){
                props.setTamanhoFonte(prevFontSize => prevFontSize - 2);
            }
        };

        const handleChange = () =>{
            if(props.darkMode===false){
                props.setDarkMode(true);
            }else{
                props.setDarkMode(false);
            }
        };


    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <img alt='Logo projeto Conecto' className={styles.logo} src={`images/vetorLogoConecto.avif`} id="logo"/>
                <a href='/'><img alt='Co.necto' className={styles.conecto} src={`images/conecto2.avif`}/></a>
            </div>
            <div>
                <menu className={styles.navMenu}>
                    <button className={`${home}`}><a href='/'>Home</a></button>
                    <button className={`${interacoes}`}><a href='/interacoes'>Interações</a></button>
                    <button className={`${documentacao}`}><a href='/documentacao'>Documentação</a></button>
                    <div className={styles.containerBotaoFonte}>
                        <a className={styles.botaoMudar} onClick={handleIncrease}><img alt='' className={styles.botaoFonte} src={'images/a.avif'}/></a>
                        <a className={styles.botaoMudar} onClick={handleDecrease}><img alt='' className={styles.botaoFonte} src={'images/a-.avif'}/></a>
                        <a className={styles.botaoDarkMode} onClick={handleChange}><img alt='' className={styles.botaoDarkMode} src={'images/darkModeIcon.svg'}/></a>
                    </div>
                </menu>
            </div>
        </div>
    );
}