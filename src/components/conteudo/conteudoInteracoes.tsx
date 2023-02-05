import React, { useState } from 'react';
import SearchField from './searchField';
import { drops } from './drops';
import SaibaMais from './botaoSaibaMais/botaoSaibaMais';
import styles from './Conteudo.module.css'
import Link from 'next/link';

export default function ConteudoInteracoes(props:{tamanhoFonte:number,darkMode:boolean}){

    const [searchBox,setSearchBox] = useState('');
    const [visivel, setVisivel] = useState(false);
    const [ordem,setOrdem] = useState(1);

    const alternarOrdem = () =>{
        if(ordem != 1){
            drops.reverse();
            setOrdem(1);
        }
    }
    const alternarOrdem2 = () =>{
        if(ordem != 2){
            drops.reverse();
            setOrdem(2);
        }
    }

    let arrayAux = drops.filter(post => {
        if (searchBox === '') {
            return post;
        }else if (post.titulo.toLowerCase().includes(searchBox.toLowerCase()) || post.subtitulo.toLowerCase().includes(searchBox.toLowerCase())) {
            return post;
        };
    });

    const jsx = (
        <>
            <h1 style={{ fontSize: `${props.tamanhoFonte+28}px` }} className={props.darkMode ? `${styles.tituloBlack2}` : `${styles.titulo2}` }>Interações</h1>
            <h3 style={{ fontSize: `${props.tamanhoFonte}px` }} className={props.darkMode ? `${styles.descricaoBlack}` : `${styles.descricao}`}>Ao longo dos meses, desenvolvemos múltiplas interações, que, a partir do uso de determinada tecnologia, criam uma experiência única
            para com o usuário.
            </h3>
            <SearchField searchBox={searchBox} setSearchBox={setSearchBox} darkMode={props.darkMode} alternarOrdem={alternarOrdem} alternarOrdem2={alternarOrdem2}/>
        </>
    );

    if(arrayAux.length === 0){
        return <div className={props.darkMode ? `${styles.containerPostBlack}` : `${styles.containerPost}`}>
            {jsx}
            <div className={props.darkMode? `${styles.containerPostsBlack}` : `${styles.containerPosts}`}>
                <h2 style={{ fontSize: `${props.tamanhoFonte+24}px` }}  className={props.darkMode ? `${styles.tituloPostInexistenteBlack}` : `${styles.tituloPostInexistente}`}>Infelizmente não temos uma interação com essa tecnologia ainda :(</h2>
                <h3 style={{ fontSize: `${props.tamanhoFonte+8}px` }} className={props.darkMode ? `${styles.subtituloBlack}` : `${styles.subtitulo}`}>Altera o termo de busca ou entre em contato conosco!</h3>
            </div>
        </div>
    }

    return (
        <>
            <Link href='https://www.instagram.com'><a target='_blank'><img className={styles.logo} alt='Logo do Instagram'src={`images/logoInstagram.svg`}></img></a></Link>
            <div className={props.darkMode ? `${styles.PostsBlack}` : `${styles.Posts}`}>
                {jsx}
                {drops.filter(post => {
                    if (searchBox === '') {
                        return post;
                    }else if (post.titulo.toLowerCase().includes(searchBox.toLowerCase()) || post.subtitulo.toLowerCase().includes(searchBox.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <div className={props.darkMode? `${styles.containerPostBlack}` : `${styles.containerPost}`} key={index}>
                        <img alt={post.textoDescritivoImagem} className={styles.img} src={`images/${post.srcImg}.webp`}/>
                        <div className={styles.containerTexto}>
                            <h2 
                                style={{ fontSize: `${props.tamanhoFonte+24}px` }}
                                className={props.darkMode ? `${styles.tituloBlack}` : `${styles.titulo}`}>
                                {post.titulo}
                            </h2>
                            <h3
                                style={{ fontSize: `${props.tamanhoFonte+8}px` }}
                                className={props.darkMode? `${styles.subtituloBlack}` : `${styles.subtitulo}`}>
                                {post.subtitulo}
                            </h3>
                            <h4
                                style={{fontSize: `${props.tamanhoFonte+4}px` }}
                                className={props.darkMode? `${styles.dataBlack}` : `${styles.data}`}>
                                {post.data}
                            </h4>
                            <p 
                                style={{ fontSize: `${props.tamanhoFonte}px` }}
                                className={props.darkMode? `${styles.textoBlack}` : `${styles.texto}`}>
                                {post.texto}
                            </p>
                            <SaibaMais 
                                visivel={visivel}
                                tamanhoFonte={props.tamanhoFonte}
                                darkMode={props.darkMode}
                                setVisivel={setVisivel}
                                index = {post.index}
                            />
                        </div>
                    </div>
                ))}           
            </div>
        </>
    );
};