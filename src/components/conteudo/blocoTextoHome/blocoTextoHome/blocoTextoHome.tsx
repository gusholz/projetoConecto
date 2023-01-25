import styles from './BlocoTextoHome.module.css'

export default function Post(props: {titulo:string, texto: string, img: string, bgColor : number,tamanhoFonte:number}){
    let containerPai = `${styles.containerPai}`
    let container = `${styles.container}`
    let blocoTexto = `${styles.texto}`
    let titulo = `${styles.titulo}`;
    let jsx = <></>;

    if(props.bgColor===1){
        containerPai = `${styles.containerPaiBlack}`
        container = `${styles.containerBlack}`;
        blocoTexto = `${styles.textoBlack}`;
        titulo = `${styles.tituloBlack}`;
    }

    jsx =(
        <div className={containerPai}>
            <div className={container}>
                <h1 style={{ fontSize: `${props.tamanhoFonte+28}px` }} className={titulo}>{props.titulo}</h1>
                <p style={{ fontSize: `${props.tamanhoFonte}px` }} className={blocoTexto}>{props.texto}</p>
            </div>
            <img alt={props.img} className={styles.imagens} src={`images/${props.img}.avif`}/>
        </div>
    )

    return (
        jsx
    )
}