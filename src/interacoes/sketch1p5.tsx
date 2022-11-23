import p5Types from "p5";
import dynamic from 'next/dynamic'
import styles from '../components/areaInterativa/areaInterativa.module.css'



export default function InteracaoP5(){
    let x = 50;
    let y = 50;
    
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
        p5.noStroke();
        p5.fill(21,21,37,p5.random(255));
		p5.ellipse(p5.mouseX,p5.mouseY, p5.random(70), p5.random(70));
	};

    return (
        <div className={styles.areaInterativa}>
            <Sketch className={styles.canvas} setup={setup} draw={draw} />
        </div>
    );
}