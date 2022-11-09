import styles from './BlocoTextoHome.module.css'

export default function Post(props: {titulo:string, texto: string, img: string}){
    let container = `${styles.container}`
    let blocoTexto = `${styles.texto}`
    let jsx = <></>
    //const imagem = props.imagem;
   
        blocoTexto = `${styles.texto}`;
        container = `${styles.container}`;
        jsx =
            <div className={styles.containerPai}>
                <div className={container}>
                    <h1 className={styles.titulo}>{props.titulo}</h1>
                    <p className={blocoTexto}>{props.texto}</p>
                </div>
                <img className={styles.imagens} src={`images/${props.img}.jpg`}/>
            </div>

    return (
        jsx
    )
}