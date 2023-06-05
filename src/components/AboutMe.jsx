import styles from './AboutMe.module.css';
import fotoale from '../assets/fotoale.png';

function AboutMe() {
    return (
        <div className={styles.container}>
            <div className={styles.fotocontainer}>
                <img className={styles.foto} src={fotoale} alt="Alejandro Azurdia"/>
            </div>
            <div className={styles.textcontainer}>
                <div className={styles.textRight}>
                    <p className={styles.nombreAle}>Alejandro Azurdia</p>
                    <p>
                        Estudiante de Ingeniería en Computación, apasionado por el desarrollo web y apuntando a ser
                        FullStack Developer. Me encanta aprender y siempre estoy buscando nuevos desafíos.
                        <br/> <br/>
                        Además de la ingeniería, me he desarrollado en otras disciplinas. La lectura, la política, las
                        ciencias puras, la historia y la música están dentro de mis intereses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
