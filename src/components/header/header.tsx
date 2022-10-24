import React from 'react';
import styles from './Header.module.css';



export default function Header(){
    return (
        <div className='header'>
            <img className={styles.logo} src={`images/vetorLogoConecto.png`} id="logo"/>
            <h1>Co.necto</h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Interações</li>
                    <li>Documentação</li>
                </ul>
            </div>
        </div>
    )
}