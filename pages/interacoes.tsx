import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ConteudoInteracoes from '../src/components/conteudo/conteudoInteracoes';
import '@nextcss/reset';

export default function Interacoes(): JSX.Element{
    let width:number;
    let inicialFontSize = 20;

    if (typeof window !== "undefined") {
        width = window.innerWidth;
    }
    const [tamanhoFonte,setTamanhoFonte] = useState(inicialFontSize);

    if(width<800){
        useEffect(() => {
                setTamanhoFonte(18);
        }, [tamanhoFonte]); 
    }

    if(width<500){
        useEffect(() => {
                setTamanhoFonte(16);
        }, [tamanhoFonte]); 
    }
    
    const [darkMode,setDarkMode] = useState(false);

    return (
        <div>
            <Head>
                <title>Interações Projeto Conecto</title>
                <meta name="description" content="Projeto vinculado ao Museu da Imagem e do Som do Ceará (MIS-CE) que tem como missão tornar a experiência museológica interativa"></meta>
                <meta name="keywords" content="museus, interação, universidade federal do ceará, tecnologia"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
                <meta name="language" content="Portuguese"></meta>
                <meta name="revisit-after" content="10 days"></meta>
                <meta name="author" content="Gustavo Holzmann"></meta>
            </Head>
            <div>
                <Header darkMode={darkMode}  setDarkMode={setDarkMode} tamanhoFonte={tamanhoFonte} setTamanhoFonte={setTamanhoFonte} ativo={2}/>
                <ConteudoInteracoes darkMode={darkMode} tamanhoFonte={tamanhoFonte}/>
                <Footer darkMode={darkMode}/>
            </div>
        </div>
    )
}