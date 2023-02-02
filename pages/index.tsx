import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ConteudoHome from '../src/components/conteudo/conteudoHome';
import AreaInterativa from '../src/components/areaInterativa/areaInterativa';
import '@nextcss/reset';
import Link from 'next/link';

export default function Home(): JSX.Element{

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
        <>
            <div>
            <Head>
                <title>Projeto Conecto </title>
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png"></link>
                <link rel="manifest" href="images/site.webmanifest"></link>
                <link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#fffdf3"></link>
                <meta name="msapplication-TileColor" content="#fffdf3"></meta>
                <meta name="theme-color" content="#fffdf3"></meta>
                <meta name="description" content="Projeto vinculado ao Museu da Imagem e do Som do Ceará (MIS-CE) que tem como missão tornar a experiência museológica interativa"></meta>
                <meta name="keywords" content="museus, interação, universidade federal do ceará, tecnologia"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
                <meta name="language" content="Portuguese"></meta>
                <meta name="revisit-after" content="10 days"></meta>
                <meta name="author" content="Gustavo Holzmann"></meta>
            </Head>
                <div>
                    <AreaInterativa/>
                    <Header darkMode={darkMode} setDarkMode={setDarkMode} tamanhoFonte={tamanhoFonte} setTamanhoFonte={setTamanhoFonte} ativo={1}/>
                    <ConteudoHome darkMode={darkMode} tamanhoFonte={tamanhoFonte}/>
                    <Footer darkMode={darkMode}/>
                </div>
            </div>
        </>
    )
}
