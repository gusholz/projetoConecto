import styles from './BlocoTextoHome.module.css'

export default function Post(props: {titulo:string, texto: string, alinhamento:string, imagem:string}){
    let container = `${styles.container}`
    let blocoTexto = `${styles.texto}`
    let jsx = <></>
    const imagem = props.imagem;

    if(props.alinhamento === 'direita'){
        blocoTexto = `${styles.textoDireita}`;
        container = `${styles.containerDireita}`;
        jsx =
            <div className={styles.containerPai}>
                <img className={styles.imagem}src={imagem} />
                <div className={container}>
                    <h1 className={styles.titulo}>{props.titulo}</h1>
                    <p className={blocoTexto}>{props.texto}</p>
                </div>
            </div>;
    }else{
        blocoTexto = `${styles.texto}`;
        container = `${styles.container}`;
        jsx =
            <div className={styles.containerPai}>
                <div className={container}>
                    <h1 className={styles.titulo}>{props.titulo}</h1>
                    <p className={blocoTexto}>{props.texto}</p>
                </div>
                <img className={styles.imagem}src={imagem} />
            </div>;
    }

    

    
    return (
        jsx
    )
}