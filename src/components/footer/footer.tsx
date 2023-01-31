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
                    <img alt="Logo MIS" className={styles.logo} src={`images/logoMis.webp`} />
                    <img alt="Logo LED" className={styles.logo} src={`images/logoLed.webp`} />
                    <img alt="Logo Célula Multimídia" className={styles.logo} src={`images/logoCelula.webp`} />
                    <img alt="Logo Instituto Mirante" className={styles.logo} src={`images/logoMirante.webp`} />
                    <img alt="Logo Governo do Estado do Ceará" className={styles.logo} src={`images/logoGov.webp`} />
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
                <a href="https://github.com/gusholz"><h3 className={styles.desenvolvidoPor}>Design e desenvolvimento realizado por Gustavo Holzmann</h3></a>
        </div>
    )
}
