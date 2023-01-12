import React, {useEffect, useState} from 'react';
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
            <div>
                <Header darkMode={darkMode}  setDarkMode={setDarkMode} tamanhoFonte={tamanhoFonte} setTamanhoFonte={setTamanhoFonte} ativo={2}/>
                <ConteudoInteracoes darkMode={darkMode} tamanhoFonte={tamanhoFonte}/>
                <Footer darkMode={darkMode}/>
            </div>
        </div>
    )
}