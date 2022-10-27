import style from './PostDocumentacao.module.css'

export default function PostDocumentacao(props:{titulo:string,subtitulo:string,data:string,texto:string,referencias:string}){
    return(
        <div className={style.container}>
            <h1 className={style.titulo}>{props.titulo}</h1>
            <h2 className={style.subtitulo}>{props.subtitulo}</h2>
            <h3 className={style.data}>{props.data}</h3>
            <p className={style.texto}>{props.texto}</p>
            <h6 className={style.referencias}>{props.referencias}</h6>
        </div>
    )

}