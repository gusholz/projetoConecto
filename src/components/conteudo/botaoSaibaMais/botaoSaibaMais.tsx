import { drops } from '../drops';
import styles from './BotaoSaibaMais.module.css'

export default function SaibaMais(props:{visivel:boolean,tamanhoFonte:number,darkMode:boolean,setVisivel,index}){

    const jsx = (
        <button style={{ fontSize: `${props.tamanhoFonte}px`}} className={props.darkMode? `${styles.botaoBlack}`: `${styles.botao}` } onClick={()=>{props.setVisivel(!(props.visivel))}}> 
            Saiba Mais
        </button>
    )
    
    if(props.visivel === true){
        return( 
            <div>
                {jsx}
                <h3 style={{ fontSize: `${props.tamanhoFonte}px`}} className={props.darkMode?  `${styles.textoAdicionalBlack}`: `${styles.textoAdicional}`}>{drops[props.index].textoAdicional}</h3>
            </div>
    )}else{
        return (
            <div>
                {jsx}
            </div>
        )
    }
}