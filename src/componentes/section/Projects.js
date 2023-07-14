import ButtonB from '../elements/buttonB'
import styles from './projects.module.css'
import Card from '../elements/card'
import Projeto1 from '../../image/projects/projeto1.png'
import Projeto2 from '../../image/projects/projeto2.png'
import Projeto4 from '../../image/projects/projeto4.png'

function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h1>projetos</h1>
        
        <Card 
            img={Projeto1}
            title="LP - Arquitetos DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma landing page de arquitetura para fins didaticos"
            repo="https://github.com/darckrow/LandingPage-Arquitetos"
            site="https://stellar-praline-ce404f.netlify.app"
        />
        <Card 
                    img={Projeto2}
                    title="DNC Coffe"
                    tech="HTML, CSS e JS"
                    description="Desenvolvimento site simples para uma cafeteria ficticia "
                    repo="https://github.com/darckrow/coffee-DNC"
                    site=""
        />
        <Card 
                            img={Projeto4}
                            title="Outside BH"
                            tech="HTML, CSS e JS"
                            description="Primeiro site que fiz por fora para uma empresa de insufilms (ainda em desenvolvimento) "
                            repo="https://github.com/darckrow/outside"
                            site="https://outsidebh.netlify.app"
            />
            <ButtonB text='Ver repositório Completo' Link='https://github.com/darckrow?tab=repositories'/>
        </div>
    )
}
export  default Projects