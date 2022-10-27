import styles from "./PostInteracao.module.css"

export default function PostInteracao(props: {srcImg:string,titulo:string,subtitulo:string,data:string, texto: string}){
    return (
        <div className={styles.containerPost} >
            <img className={styles.img} src={`images/${props.srcImg}.png`}/>
            <div className={styles.containerTexto}>
                <h2 
                    className={styles.titulo}>
                    {props.titulo}
                </h2>
                <h3
                    className={styles.subtitulo}>
                    {props.subtitulo}
                </h3>
                <h4
                    className={styles.data}>
                    {props.data}
                </h4>
                <p 
                    className={styles.texto}>
                    {props.texto}
                </p>  
            </div>
        </div>
    )
}