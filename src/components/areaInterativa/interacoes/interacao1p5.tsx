import p5Types from "p5";
import dynamic from "next/dynamic";
import styles from "./interacoes.module.css";

export default function InteracaoP5(){

    let height = screen.height;
    let diametroMin = 250;
    let diametroMax = 1500;
    let diametroStep = 50;
    let aceleracao = 0.15;
    let xx:number,yy: number;
    let angulo = 0;

    if((screen.availWidth)<1100){
        diametroStep = 25;
        diametroMax = 750;
    }
  
    // Para prevenir erros de importação do React ao importar o `react-p5`
    const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
    });
    //  Sem essas 3 linhas o código dá erro
    

    const setup = (p5:p5Types,canvasParentRef:Element) => {
        //O tamanho ta bugando por conta da aba lateral do operaGX
        //Testar como vai funfar em outras telas
        p5.createCanvas(p5.displayWidth-58,height*0.65).parent(canvasParentRef);
        //p5.fullscreen();

        p5.noFill();
        p5.strokeWeight(diametroStep/6);
        p5.stroke(21,21,37,180);
        p5.frameRate(48);
        p5.smooth();
    }

    const draw = (p5:p5Types) => {
        p5.background('#F3C300');
        
        xx = p5.sin(p5.radians(angulo))*250;
        yy = p5.cos(p5.radians(angulo))*500;

        p5.translate(p5.width/2,p5.height/2);

        for(let diametro = diametroMin; diametro<diametroMax; diametro +=diametroStep){
          
            p5.ellipse(-xx,yy,diametro,diametro);
            p5.ellipse(xx,-yy,diametro,diametro);
          }

        if(p5.frameCount>60){
            angulo+=aceleracao;
        }  
    }

    const conecto = `{Co.necte-se}`;

    return (
        <>
            <div className={styles.areaInterativa}>
                <Sketch className={styles.canvas} setup={setup} draw={draw} />
                <h1 className={styles.logoInterativa}>{conecto}</h1>           
            </div>
        </>
    );
}