import styles from "./Footer.module.css"

export default function Footer(props:{darkMode:boolean}){

    let containerPai = `${styles.containerPai}`
    let container = `${styles.container}`
    let bgColor = 0;

    if(props.darkMode ===true){
        bgColor = 1;
    }else{
        bgColor = 0;
    }
    if(bgColor===1){
        containerPai = `${styles.containerPaiBlack}`
        container = `${styles.containerBlack}`
    }else{
        containerPai = `${styles.containerPai}`
        container = `${styles.container}`
    }


    return (
        <div className={containerPai}>           
                <div className={styles.containerImagens}>
                    <img className={styles.logo} src={`images/logoMis.png`} />
                    <img className={styles.logo} src={`images/logoLed.png`} />
                    <img className={styles.logo} src={`images/logoCelula.png`} />
                    <img className={styles.logo} src={`images/logoMirante.png`} />
                    <img className={styles.logo} src={`images/logoGov.png`} />
                </div>
                <div className={container}>
                    <p className={styles.copyright}>
                        O projeto Co.necto é vinculado ao Museu da Imagem e do Som, instituição pública
                        regida pelo Instituto Mirante de Cultura e Arte.
                        Surge na Universidade Federal do Ceará, mais especificamente, a partir da parceria
                        entre o Laboratório de Experiência Digital (LED), que atua no departamento
                        de Arquitetura, Urbanismo e Design e a Célula Multimídia, do departamento
                        de Sistemas e Mídias Digitais. 
                    </p>
                </div>
                <h2 className={styles.infos}>Para mais informações:</h2>
                <h3 className={styles.contato}>projetoconecto@institutomirante.com.br</h3>
                <h3 className={styles.contato}>@projetoconecto</h3>
                <h3 className={styles.desenvolvidoPor}>Site desenvolvido por Gustavo Holzmann</h3>
        </div>
    )
}
