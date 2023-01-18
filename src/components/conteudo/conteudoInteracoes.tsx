import React, { useState } from 'react';
import styles from './Conteudo.module.css'
//import style from "../conteudo/postInteracoes/postInteracao.module.css";
import SearchField from './searchField';
import { drops } from './drops';

export default function ConteudoInteracoes(props:{tamanhoFonte:number,darkMode:boolean}){

    const [searchBox,setSearchBox] = useState("");

    let container = `${styles.containerPost}`
    let titulo2 = `${styles.titulo}`
    let subtitulo = `${styles.subtitulo}`
    let data = `${styles.data}`
    let texto = `${styles.texto}`
    let containerPosts = `${styles.containerPosts}`
    let titulo = `${styles.titulo}`
    let descricao = `${styles.descricao}`

    if(props.darkMode === true){
        container = `${styles.containerPostBlack}`
        titulo2 = `${styles.tituloBlack2}`;
        subtitulo = `${styles.subtituloBlack}`;
        data = `${styles.dataBlack}`;
        texto = `${styles.textoBlack}`
        containerPosts = `${styles.containerPostsBlack}`
        titulo = `${styles.tituloBlack}`
        descricao = `${styles.descricaoBlack}`
    }else{
        container = `${styles.containerPost}`
        titulo2 = `${styles.titulo2}`
        subtitulo = `${styles.subtitulo}`
        data = `${styles.data}`
        data = `${styles.data}`
        containerPosts = `${styles.containerPosts}`
        titulo = `${styles.titulo}`
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

    let postInexistente = {
        index:3,
        titulo: "Post não encontrado :(",
        subtitulo: 'Tente redefinir a busca ou entre em contato com a gente!',
        data: '__/__/__',
        srcImg: "drop1telas",
        texto: "Infelizmente ainda não desenvolvemos uma interação com esse(s) dispositivos"
    }

    return (
        <div className={containerPosts}>
            <h1 style={{ fontSize: `${props.tamanhoFonte+32}px` }} className={titulo2}>Interações</h1>
            <h3 style={{ fontSize: `${props.tamanhoFonte}px` }} className={descricao}>Ao longo dos meses, desenvolvemos múltiplas interações, que, a partir do uso de determinada tecnologia, criam uma experiência única
                para com o usuário.
            </h3>
            <SearchField searchBox={searchBox} setSearchBox={setSearchBox} darkMode={props.darkMode} alternarOrdem={alternarOrdem} alternarOrdem2={alternarOrdem2}/>
            {drops.filter(post => {
                if (searchBox === '') {
                    return post;
                }else if (post.titulo.toLowerCase().includes(searchBox.toLowerCase()) || post.subtitulo.toLowerCase().includes(searchBox.toLowerCase())) {
                    return post;
                }else if(!post.titulo.toLowerCase().includes(searchBox.toLowerCase()) || !post.subtitulo.toLowerCase().includes(searchBox.toLowerCase())){
                    //console.log("Objeto inexiste")
                    //post = postInexistente;
                    //return post 
                }
            }).map((post, index) => (
                <div className={container} key={index}>
                    <img className={styles.img} src={`images/${post.srcImg}.png`}/>
                    <div className={styles.containerTexto}>
                        <h2 
                            style={{ fontSize: `${props.tamanhoFonte+28}px` }}
                            className={titulo}>
                            {post.titulo}
                        </h2>
                        <h3
                            style={{ fontSize: `${props.tamanhoFonte+8}px` }}
                            className={subtitulo}>
                            {post.subtitulo}
                        </h3>
                        <h4
                            style={{ 
                                fontSize: `${props.tamanhoFonte+4}px` }}
                            className={data}>
                            {post.data}
                        </h4>
                        <p 
                            style={{ fontSize: `${props.tamanhoFonte}px` }}
                            className={texto}>
                            {post.texto}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
