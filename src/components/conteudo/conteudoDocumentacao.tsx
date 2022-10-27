import PostDocumentacao from "./postDocumentacao/postDocumentacao";
import styles from '../conteudo/Conteudo.module.css'

export default function ConteudoInteracoes(){
    return (
        <div className={styles.containerDocumentacao}>
            <PostDocumentacao
                titulo="Níveis de Interação"
                subtitulo="como o nível visceral, sensorial e reflexivo se demonstram em interações "
                data=" 20/08/22"
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos, 
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim"
                referencias="Autor. Título: subtitulo. edição. Local: Editora, ano. página. volume."
            />
            <PostDocumentacao
                titulo="Níveis de Interação"
                subtitulo="como o nível visceral, sensorial e reflexivo se demonstram em interações "
                data=" 20/08/22"
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos, 
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim"
                referencias="Autor. Título: subtitulo. edição. Local: Editora, ano. página. volume."
            />
            <PostDocumentacao
                titulo="Níveis de Interação"
                subtitulo="como o nível visceral, sensorial e reflexivo se demonstram em interações "
                data=" 20/08/22"
                texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos, 
                com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim"
                referencias="Autor. Título: subtitulo. edição. Local: Editora, ano. página. volume."
            />
        </div>
    )
}