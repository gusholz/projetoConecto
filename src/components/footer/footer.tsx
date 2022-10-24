import styles from "./Footer.module.css"

export default function Footer(){
    return (
        <div className='container'>
            <h2>Para mais informações:</h2>
            <p>
                O projeto Co.necto é vinculado ao Museu
                da Imagem e do Som, instituição pública
                regida pelo Instituto Mirante de Cultura e Arte
            </p>
            <img className={styles.logo} src={`images/vetorLogoConecto.png`} id="logo"/>
        </div>
    )
}