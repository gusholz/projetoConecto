import styles from "./PostInteracao.module.css"


export default function PostInteracao(props: {srcImg:string,titulo:string,subtitulo:string,data:string, texto: string,tamanhoFonte:number,bgColor:number}){
    
    let container = `${styles.containerPost}`
    let titulo = `${styles.titulo}`
    let subtitulo = `${styles.subtitulo}`
    let data = `${styles.data}`
    let texto = `${styles.texto}`

    if(props.bgColor===1){
        container = `${styles.containerPostBlack}`
        titulo = `${styles.tituloBlack}`;
        subtitulo = `${styles.subtituloBlack}`;
        data = `${styles.dataBlack}`;
        texto = `${styles.textoBlack}`
    }else{
        container = `${styles.containerPost}`
        titulo = `${styles.titulo}`
        subtitulo = `${styles.subtitulo}`
        data = `${styles.data}`
    }
    
    return (
        <div className={container} >
            <img className={styles.img} src={`images/${props.srcImg}.png`}/>
            <div className={styles.containerTexto}>
                <h2 
                    style={{ fontSize: `${props.tamanhoFonte+28}px` }}
                    className={titulo}>
                    {props.titulo}
                </h2>
                <h3
                    style={{ fontSize: `${props.tamanhoFonte+8}px` }}
                    className={subtitulo}>
                    {props.subtitulo}
                </h3>
                <h4
                    style={{ 
                        fontSize: `${props.tamanhoFonte+4}px` }}
                    className={data}>
                    {props.data}
                </h4>
                <p 
                    style={{ fontSize: `${props.tamanhoFonte}px` }}
                    className={texto}>
                    {props.texto}
                </p>
            </div>
        </div>
    )
}