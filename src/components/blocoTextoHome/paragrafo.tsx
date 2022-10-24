import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from "react";

export default function Paragrafo(props: { texto: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>>; }){
    return <p>{props.texto}</p>
}