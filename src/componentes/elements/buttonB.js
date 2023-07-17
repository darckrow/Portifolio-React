import styles from './buttonB.module.css'
function ButtonB({text, Link}){
    return(
        <div>
            <a href={Link} target="_blank" rel="noreferrer">
                <button className={styles.btn}> {text}</button>
            </a>
        </div>
    )
}
export default ButtonB