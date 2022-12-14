import styles from './BlocoTextoHome.module.css'

export default function Post(props: {titulo:string, texto: string, img: string, bgColor : number,tamanhoFonte:number}){
    let containerPai = `${styles.containerPai}`
    let container = `${styles.container}`
    let blocoTexto = `${styles.texto}`
    let titulo = `${styles.titulo}`;
    let jsx = <></>;

    blocoTexto = `${styles.texto}`;
    container = `${styles.container}`;
    if(props.bgColor===1){
        containerPai = `${styles.containerPaiBlack}`
        container = `${styles.containerBlack}`;
        blocoTexto = `${styles.textoBlack}`;
        titulo = `${styles.tituloBlack}`;
    }

    console.log(props.tamanhoFonte);

        jsx =
            <div className={containerPai}>
                <div className={container}>
                    <h1 style={{ fontSize: `${props.tamanhoFonte+32}px` }} className={titulo}>{props.titulo}</h1>
                    <p style={{ fontSize: `${props.tamanhoFonte}px` }} className={blocoTexto}>{props.texto}</p>
                </div>
                <img alt={props.img} className={styles.imagens} src={`images/${props.img}.png`}/>
            </div>

    return (
        jsx
    )
}