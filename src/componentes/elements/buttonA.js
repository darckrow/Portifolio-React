import styles from './ButtonA.module.css'
function ButtonA({text, Link}){
    return(
        <div>
            <a href={Link} target="_blank" rel="noreferrer">
                <button className={styles.btn}> {text}</button>
            </a>
        </div>
    )
}
export default ButtonA

