/* eslint-disable jsx-a11y/alt-text */
import styles from './card.module.css'
import ButtonB from './buttonB'

function card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site}>
            <img src={img} />
            </a>
            <div>
                <h3>{title}</h3>
                <p><strong>Tecnologias: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositorio' Link={repo}/>
            </div>
        </div>
    )
}
export default card