import React from 'react';
import styles from './Header.module.css';

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <img className={styles.logo} src={`images/vetorLogoConecto.png`} id="logo"/>
                <h1 className={styles.titulo}>Co.necto</h1>
            </div>
            <div>
                <menu className={styles.navMenu}>
                    <li className={styles.itemMenu}><a href='/' >Home</a></li>
                    <li className={styles.itemMenu}><a href='/interacoes'>Interações</a></li>
                    <li className={styles.itemMenu}><a href='/documentacao'>Documentação</a></li>
                </menu>
            </div>
        </div>
    )
}