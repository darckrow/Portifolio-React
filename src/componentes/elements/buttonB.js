import styles from './buttonB.module.css'
function ButtonB({text, Link}){
    return(
        <section>
            <a href={Link} target="_blank" rel="noreferrer">
                <button className={styles.btn}> {text}</button>
            </a>
        </section>
    )
}
export default ButtonB