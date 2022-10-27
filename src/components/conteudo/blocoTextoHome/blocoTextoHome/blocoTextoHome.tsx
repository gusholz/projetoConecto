import styles from './BlocoTextoHome.module.css'

export default function Post(props: {titulo:string, texto: string}){
    return (
        <div className={styles.container} >
            <h1 className={styles.titulo}>{props.titulo}</h1>
            <p className={styles.texto}>{props.texto}</p>
        </div>
    )
}