import styles from "./Footer.module.css"

export default function Footer(){
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.infos}>Para mais informações:</h2>
                <h3 className={styles.contato}>projetoconecto@institutomirante.com.br</h3>
                <p className={styles.copyright}>
                    O projeto Co.necto é vinculado ao Museu
                    da Imagem e do Som, <br></br>instituição pública
                    regida pelo Instituto Mirante de Cultura e Arte
                </p>
            </div>
            <img className={styles.logo} src={`images/vetorLogoConectoBranco.png`} id="logo"/>
        </div>
    )
}