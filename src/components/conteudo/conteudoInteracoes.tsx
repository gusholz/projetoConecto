import React, { useState } from 'react';
import SearchField from './searchField';
import { drops } from './drops';
import SaibaMais from './botaoSaibaMais/botaoSaibaMais';
import styles from './Conteudo.module.css'

export default function ConteudoInteracoes(props:{tamanhoFonte:number,darkMode:boolean}){

    const [searchBox,setSearchBox] = useState("");
    const [visivel, setVisivel] = useState(false)

    let container = `${styles.containerPost}`
    let titulo2 = `${styles.titulo}`
    let subtitulo = `${styles.subtitulo}`
    let data = `${styles.data}`
    let texto = `${styles.texto}`
    let containerPosts = `${styles.containerPosts}`
    let titulo = `${styles.titulo}`
    let tituloPostInexistente = `${styles.tituloPostInexistente}`
    let descricao = `${styles.descricao}`

    if(props.darkMode === true){
        container = `${styles.containerPostBlack}`
        titulo2 = `${styles.tituloBlack2}`;
        subtitulo = `${styles.subtituloBlack}`;
        data = `${styles.dataBlack}`;
        texto = `${styles.textoBlack}`
        containerPosts = `${styles.containerPostsBlack}`
        titulo = `${styles.tituloBlack}`
        tituloPostInexistente = `${styles.tituloPostInexistenteBlack}`
        descricao = `${styles.descricaoBlack}`
    }else{
        container = `${styles.containerPost}`
        titulo2 = `${styles.titulo2}`
        subtitulo = `${styles.subtitulo}`
        data = `${styles.data}`
        data = `${styles.data}`
        containerPosts = `${styles.containerPosts}`
        titulo = `${styles.titulo}`
        tituloPostInexistente = `${styles.tituloPostInexistente}`    
        descricao = `${styles.descricao}`
    }

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
            <h1 style={{ fontSize: `${props.tamanhoFonte+28}px` }} className={titulo2}>Interações</h1>
            <h3 style={{ fontSize: `${props.tamanhoFonte}px` }} className={descricao}>Ao longo dos meses, desenvolvemos múltiplas interações, que, a partir do uso de determinada tecnologia, criam uma experiência única
            para com o usuário.
            </h3>
            <SearchField searchBox={searchBox} setSearchBox={setSearchBox} darkMode={props.darkMode} alternarOrdem={alternarOrdem} alternarOrdem2={alternarOrdem2}/>
        </>
    );

    if(arrayAux.length === 0){
        return <div className={containerPosts}>
            {jsx}
            <div className={container}>
                <h2 className={tituloPostInexistente}>Infelizmente não temos uma interação com essa tecnologia ainda :(</h2>
                <h3 className={subtitulo}>Altera o termo de busca ou entre em contato conosco!</h3>
            </div>
        </div>
    }

    return (
        <>
            <a target="_blank" className={styles.link} href='https://www.instagram.com'><img alt='Logo do Instagram' className={styles.logo} src={`images/logoInstagram.svg`}></img></a>
            <div className={containerPosts}>
                {jsx}
                {drops.filter(post => {
                    if (searchBox === '') {
                        return post;
                    }else if (post.titulo.toLowerCase().includes(searchBox.toLowerCase()) || post.subtitulo.toLowerCase().includes(searchBox.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <div className={container} key={index}>
                        <img className={styles.img} src={`images/${post.srcImg}.png`}/>
                        <div className={styles.containerTexto}>
                            <h2 
                                style={{ fontSize: `${props.tamanhoFonte+24}px` }}
                                className={titulo}>
                                {post.titulo}
                            </h2>
                            <h3
                                style={{ fontSize: `${props.tamanhoFonte+8}px` }}
                                className={subtitulo}>
                                {post.subtitulo}
                            </h3>
                            <h4
                                style={{fontSize: `${props.tamanhoFonte+4}px` }}
                                className={data}>
                                {post.data}
                            </h4>
                            <p 
                                style={{ fontSize: `${props.tamanhoFonte}px` }}
                                className={texto}>
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