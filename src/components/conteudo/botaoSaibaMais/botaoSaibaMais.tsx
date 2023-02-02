import { drops } from '../drops';
import styles from './BotaoSaibaMais.module.css'

export default function SaibaMais(props:{visivel:boolean,tamanhoFonte:number,darkMode:boolean,setVisivel,index}){

    let botao = `${styles.botao}`
    let textoAdicional = `${styles.textoAdicional}`

    if(props.darkMode === true){
        botao = botao+"Black";
        textoAdicional = textoAdicional+"Black";
    }else{
        botao = `${styles.botao}`;
        textoAdicional = `${styles.textoAdicional}`;
    }

    const jsx = (
        <button style={{ fontSize: `${props.tamanhoFonte}px`}} className={botao} onClick={()=>{props.setVisivel(!(props.visivel))}}> 
            Saiba Mais
        </button>
    )
    
    if(props.visivel === true){
        return( 
            <div>
                {jsx}
                <h3 style={{ fontSize: `${props.tamanhoFonte}px`}} className={textoAdicional}>{drops[props.index].textoAdicional}</h3>
            </div>
    )}else{
        return (
            <div>
                {jsx}
            </div>
        )
    }
}