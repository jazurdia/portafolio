import styles from './Proyectos.module.css';
import propTypes from "prop-types";
import github from '../assets/github.svg';
import logowww from '../assets/logowww.svg';

function Proyectos({title, description, linkWeb, linkGitHub}) {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.containerlinks}>
                <button className={styles.button} onClick={() => window.open(linkWeb, "_blank")}>
                    <img className={styles.imglogo} src={logowww} alt="Web"/>
                </button>
                <button className={styles.button} onClick={() => window.open(linkGitHub, "_blank")}>
                    <img className={styles.imglogo} src={github} alt="Github"/>
                </button>
            </div>
        </div>
    );
}

Proyectos.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    linkWeb: propTypes.string.isRequired,
    linkGitHub: propTypes.string.isRequired
}

export default Proyectos;
