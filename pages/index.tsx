import React, {useState} from 'react';
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


    return (
        <div>
            <div>
                <AreaInterativa/>
                <Header tamanhoFonte={tamanhoFonte} setTamanhoFonte={setTamanhoFonte} ativo={1}/>
                <ConteudoHome tamanhoFonte={tamanhoFonte}/>
                <Footer/>
            </div>
        </div>
    )
}