import {motion, Variants} from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./interacoes.module.css";

export default function InteracaoMouseZoom(){

    const [mousePosition,setMousePosition] = useState({
        x : 0,
        y : 0
    });

    const [interacaoCursor,setInteracaoCursor] = useState("default");

    useEffect(()=>{
        const movimentoMouse = (e: { clientX: any; clientY: any; }) =>{
            setMousePosition({
                x: e.clientX,
                y : e.clientY
            })
        }

        window.addEventListener("mousemove",movimentoMouse);

        return () => {
            window.removeEventListener("mousemove",movimentoMouse);
        }
    }, []);

    const circleSize = 220;

    const variants :Variants = {
        default : {
            x : mousePosition.x - 15,
            y : mousePosition.y - 15
        },

        interagindo :{
            height: circleSize,
            width : circleSize,
            x : mousePosition.x - (circleSize/2),
            y : mousePosition.y - (circleSize/2),
            backgroundColor: "#F3C300",
            mixBlendMode : "difference"
        },

        desligado : {
            display: "none"
        }
    }

    const mouseNaoInterage = () => {
        setInteracaoCursor("default");
    }

    const mouseInterage = () => {
        setInteracaoCursor("interagindo");
    }

    const mouseDesligado = () => {
        setInteracaoCursor("desligado");
    }

    const conecto = `{Co.necte-se}`;

    return(
        <div onMouseEnter={mouseNaoInterage} onMouseLeave={mouseDesligado} className={styles.areaInterativa}>
            <h1 onMouseEnter={mouseInterage} onMouseLeave={mouseNaoInterage} className={styles.titulo}>{conecto}</h1>
            <motion.div 
                className={styles.cursor}
                variants={variants}
                animate = {interacaoCursor}
            />
        </div>
    );
}