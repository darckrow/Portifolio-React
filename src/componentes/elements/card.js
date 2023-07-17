/* eslint-disable react-hooks/rules-of-hooks */

import styles from './card.module.css'
import ButtonB from './buttonB'
import {useState} from 'react'

function card({img, title, tech, description, repo, site}){

   const [Info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }
    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className={styles.card}>

            <a onMouseEnter={InfoOn} href={site} >
            <img src={img} alt='ERRO'/>
            </a>

            {Info === true && (
                    
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologias: </strong>{tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse o repositorio' Link={repo}/>
                </section>

            )}
        </div>
    )
}
export default card