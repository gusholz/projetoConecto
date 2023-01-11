import styles from "./PostInteracao.module.css"


export default function PostInteracao(props: {srcImg:string,titulo:string,subtitulo:string,data:string, texto: string,tamanhoFonte:number}){
    return (
        <div className={styles.containerPost} >
            <img className={styles.img} src={`images/${props.srcImg}.png`}/>
            <div className={styles.containerTexto}>
                <h2 
                    style={{ fontSize: `${props.tamanhoFonte+28}px` }}
                    className={styles.titulo}>
                    {props.titulo}
                </h2>
                <h3
                    style={{ fontSize: `${props.tamanhoFonte+8}px` }}
                    className={styles.subtitulo}>
                    {props.subtitulo}
                </h3>
                <h4
                    style={{ 
                        fontSize: `${props.tamanhoFonte+4}px` }}
                    className={styles.data}>
                    {props.data}
                </h4>
                <p 
                    style={{ fontSize: `${props.tamanhoFonte}px` }}
                    className={styles.texto}>
                    {props.texto}
                </p>
            </div>
        </div>
    )
}