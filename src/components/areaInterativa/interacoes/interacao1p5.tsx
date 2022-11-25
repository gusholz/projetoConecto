import p5Types from "p5";
import dynamic from "next/dynamic";
import styles from "./interacoes.module.css";



export default function InteracaoP5(){
    let x = 50;
    let y = 50;
    let selected = 1;
    let randomNumber1:number;
    let randomNumber2:number;
    let randomNumber3:number;
    
    // Para prevenir erros de importação do React ao importar o `react-p5`
    const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
    });
    //  Sem essas 3 linhas o código dá erro
    

    const setup = (p5:p5Types,canvasParentRef:Element) => {
        //O tamanho ta bugando por conta da aba lateral do operaGX
        //Testar como vai funfar em outras telas
        p5.createCanvas(p5.displayWidth-58,680).parent(canvasParentRef);
        p5.background('#F3C300');
       
    }

    const draw = (p5: p5Types) => {

        randomNumber1 = p5.random(0,p5.width);
        randomNumber2 = p5.random(0,p5.height);
        randomNumber3 = p5.random(0,25);

        if(selected === 1){
            p5.noStroke();
            p5.fill(21,21,37,p5.random(255));
            p5.ellipse(p5.random(p5.width),p5.random(p5.height), p5.random(15), p5.random(15));
        }

        if(selected ===2){
            p5.noStroke();
            p5.fill(21,21,37,p5.random(255));
            p5.square(randomNumber1,randomNumber2,randomNumber3);
        }

        if(selected ===3){
            p5.strokeWeight(randomNumber3/1.3);
            p5.stroke('#FFFDF3');
            p5.point(randomNumber1,randomNumber2);
        }
        

        if(p5.mouseIsPressed){
            selected+=1;
            if(selected>3){
                selected = 1;
            } 
            p5.print(selected)
           
        }

	};


        
    

    return (
        <div className={styles.areaInterativa}>
            <Sketch className={styles.canvas} setup={setup} draw={draw} />
        </div>
    );
}