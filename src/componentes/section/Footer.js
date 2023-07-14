import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './footer.module.css'
function footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href="https://www.instagram.com/ramon_m.matheus/" target="_blank" rel="noreferrer"><FaInstagram size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/ramon-matheus-3344041b1/" target="_blank" rel="noreferrer"><FaLinkedin size={30}/></a></li>
                <li><a href="https://github.com/darckrow" target="_blank" rel="noreferrer"><FaGithub size={30}/></a></li>
            </ul>
            <p>ramonmateus30@gmail.com</p>
            <p> Ramon Matheus @ 2023 </p>
        </div>
    )
}
export default footer