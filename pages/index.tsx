import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import ConteudoHome from '../src/components/conteudo/conteudoHome';
import AreaInterativa from '../src/components/areaInterativa/areaInterativa';
import '@nextcss/reset';

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
                <html lang='pt-BR'></html>
                <title>Co.necto</title>
                <meta name="viewport" content="width=device-width"></meta>
                <meta name="Descrição" content="Projeto vinculado ao Museu da Imagem e do Som do Ceará (MIS-CE) que tem como missão tornar a experiência museulógica interativa"/>
                <meta charSet='UTF-8'/>
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
