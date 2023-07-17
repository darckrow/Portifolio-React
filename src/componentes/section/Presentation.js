/* eslint-disable react-hooks/exhaustive-deps */
import styles from './presentation.module.css'
import ButtonA from '../elements/buttonA'
import { useEffect, useState } from 'react'



function Presentation (){
    const [text, setText] = useState('');
    const toRotate = ['Ramon Matheus!', 'Desenvolvedor Front End'];
    const [loop, setloop] = useState(0);
    const [isDeliting, setIsDelinting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)
    
    useEffect(() => {
        let ticker = setInterval(() =>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])


    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeliting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1) 
        
        setText(updatedText); 

        if(!isDeliting && updatedText === fullText){
            setIsDelinting(true);
            setDelta(period);
        }else if(isDeliting && updatedText === ''){
            setIsDelinting(false);
            setDelta(period);
            setloop(loop+1);
        }
    }


    return (
        <div className={styles.presentation} id="Apresentacao">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1><strong>Olá, eu sou {text}</strong></h1>

            <p>
                Busco novas oportunidades e recolocação no mercado de trabalho. <br/>
                Tenho grande facilidade na área tecnológica, experiências com comunicação <br/>
                e atendimento a clientes. Considero-me bastante ágil para cumprir tarefas e <br/>
                metas a mim direcionadas, sou resiliste, flexível, criativo e me dedico ao <br/>
                máximo as oportunidades oferecidas em busca de bons resultados.
            </p>

            <ButtonA Link='https://www.linkedin.com/in/ramon-matheus-3344041b1' text='Conecte-se comigo!!'/>
        </div>
    )
}
export default Presentation