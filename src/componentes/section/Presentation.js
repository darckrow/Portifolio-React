import styles from './presentation.module.css'
import ButtonA from '../elements/buttonA'


function Presentation (){
    return (
        <div className={styles.presentation} id="Apresentacao">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1><strong>Olá, eu sou Ramon Matheus!</strong></h1>

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