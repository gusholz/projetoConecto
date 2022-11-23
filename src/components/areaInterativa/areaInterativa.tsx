import { useEffect, useState } from 'react';
import InteracaoMouseZoom from './interacoes/mouseZoom'
import InteracaoP5 from './interacoes/sketch1p5'


export default function AreaInterativa(){
    const numInteracoes = 2;
    const randomNumber = Math.floor((Math.random()*numInteracoes)+1);
    
    const [seletorInteracao,setSeletorInteracao] = useState(<></>)

    useEffect(()=>{
        if(randomNumber=== 1){
            console.log("interacao 1");
            setSeletorInteracao(<InteracaoMouseZoom />);
        }
        
        if(randomNumber=== 2){
            console.log("interacao 2");
            setSeletorInteracao(<InteracaoP5 />);
        }

    }, []);

    return(
        <>
            {seletorInteracao}
        </>
    )
}