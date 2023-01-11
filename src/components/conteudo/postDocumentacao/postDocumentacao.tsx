import style from './PostDocumentacao.module.css'

export default function PostDocumentacao(props:{titulo:string,subtitulo:string,data:string,texto:string,referencias:string,tamanhoFonte:number}){
    return(
        <div className={style.container}>
            <h1 style={{ fontSize: `${props.tamanhoFonte+28}px` }} className={style.titulo}>{props.titulo}</h1>
            <h2 style={{ fontSize: `${props.tamanhoFonte+8}px` }} className={style.subtitulo}>{props.subtitulo}</h2>
            <h3 style={{ fontSize: `${props.tamanhoFonte+4}px` }} className={style.data}>{props.data}</h3>
            <p  style={{ fontSize: `${props.tamanhoFonte}px` }} className={style.texto}>{props.texto}</p>
            <h6 style={{ fontSize: `${props.tamanhoFonte-6}px` }} className={style.referencias}>{props.referencias}</h6>
        </div>
    )

}