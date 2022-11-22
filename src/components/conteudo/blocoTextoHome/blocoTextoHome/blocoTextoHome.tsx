import styles from './BlocoTextoHome.module.css'

export default function Post(props: {titulo:string, texto: string, img: string, bgColor : number}){
    let containerPai = `${styles.containerPai}`
    let container = `${styles.container}`
    let blocoTexto = `${styles.texto}`
    let titulo = `${styles.titulo}`;
    let jsx = <></>

    //const imagem = props.imagem;
    
    blocoTexto = `${styles.texto}`;
    container = `${styles.container}`;
    if(props.bgColor===1){
        containerPai = `${styles.containerPaiBlack}`
        container = `${styles.containerBlack}`;
        blocoTexto = `${styles.textoBlack}`;
        titulo = `${styles.tituloBlack}`;
    }
        jsx =
            <div className={containerPai}>
                <div className={container}>
                    <h1 className={titulo}>{props.titulo}</h1>
                    <p className={blocoTexto}>{props.texto}</p>
                </div>
                <img className={styles.imagens} src={`images/${props.img}.png`}/>
            </div>

    return (
        jsx
    )
}