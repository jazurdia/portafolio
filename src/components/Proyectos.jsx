import styles from './Proyectos.module.css';
import propTypes from "prop-types";
import github from '../assets/github.svg';
import www from '../assets/www.svg';

function Proyectos(img, title, description, linkWeb, linkGitHub) {
    return (
        <div className={styles.container}>
            <div className={styles.containerimg}>
                <img src={img} alt="imagen"/>
            </div>
            <div className={styles.containerinfo}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <div className={styles.containerlinks}>
                    <button className={styles.button} onClick={() => window.open(linkWeb, "_blank")}>
                        <img src="" alt="Web"/>
                    </button>
                    <button className={styles.button} onClick={() => window.open(linkGitHub, "_blank")}>
                        <img src={github} alt="Web"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;

Proyectos.propTypes = {
    img: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    url1: propTypes.string.isRequired,
    url2: propTypes.string.isRequired
}
