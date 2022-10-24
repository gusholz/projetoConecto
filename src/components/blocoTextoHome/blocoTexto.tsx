import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import Paragrafo from "./paragrafo"

export default function BlocoTextoHome(props: { titulo: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal }){
    return (
        <div className='container'>
            <h1>{props.titulo}</h1>
            <Paragrafo texto="O projeto Co.necto surge com um desejo de transformar a nossa realidade graças a preservação da memória e dos afetos, com o intuito máximo de promover as conexões humanas, a partir do emprego da tecnologia enquanto um meio, e não como um fim, p"/>
        </div>
    )
}