import React, { useState,useEffect } from 'react';
import styles from './Header.module.css';

export default function Header(){

    let estilo:string = styles.header;

    return (
        <div className={`${estilo}`}>
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