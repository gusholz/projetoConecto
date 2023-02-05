import styles from './BlocoTextoHome.module.css'

export default function Post(props: {titulo:string, children:string, img: string, bgColor : number,tamanhoFonte:number}){
    
    let darkMode = false;
    if(props.bgColor===0){darkMode = false} else {darkMode = true};

    return (
        <div className={darkMode ? `${styles.containerPaiBlack}` : `${styles.containerPai}`}>
            <div className={darkMode ? `${styles.containerBlack}` : `${styles.container}`}>
                <h1 style={{ fontSize: `${props.tamanhoFonte+28}px` }} className={darkMode ? `${styles.tituloBlack}` : `${styles.titulo}`}>{props.titulo}</h1>
                <p style={{ fontSize: `${props.tamanhoFonte}px` }} className={darkMode? `${styles.textoBlack}` : `${styles.texto}`}>{props.children}</p>
            </div>
            <img alt={props.img} className={styles.imagens} src={`images/${props.img}.webp`}/>
        </div>
    )
}