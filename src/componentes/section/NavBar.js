import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
            <li><Nav.Link href='#Apresentacao'>apresentação</Nav.Link></li>
            <li><Nav.Link href='#Habilidades'>Habilidades</Nav.Link></li>
            <li><Nav.Link href='#Projects'>Projetos</Nav.Link> </li>
            </ul>
            <ul>
            <li><a href="https://www.instagram.com/ramon_m.matheus/" target="_blank" rel="noreferrer"><FaInstagram size={30}/></a></li>
            <li><a href="https://www.linkedin.com/in/ramon-matheus-3344041b1/" target="_blank" rel="noreferrer"><FaLinkedin size={30}/></a></li>
            <li><a href="https://github.com/darckrow" target="_blank" rel="noreferrer"><FaGithub size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar