import styles from './App.module.css';
import Experiencia from "./components/Experiencia.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Proyectos from "./components/Proyectos.jsx";


function App() {
    return (
        <div className={styles.App}>
            <AboutMe/>
            <Experiencia/>
            <div className={styles.misproyectos}>
                <p className={styles.misproyectostitle}>Mis Proyectos</p>
                <div className={styles.misproyectosLista}>
                    <Proyectos
                        title={"Netflix Clone"}
                        description={"Clon de la página de Netflix"}
                        linkWeb={"https://uvgenios.online/21242/proyecto1/"}
                        linkGitHub={"https://github.com/jazurdia/Netflix-Home"}
                    />
                    <Proyectos
                        title={"UniEmpleos"}
                        description={"Plataforma para que los estudiantes universitarios encuentren un empleo que se relacione con su campo."}
                        linkWeb={"https://sage-palmier-936be2.netlify.app/"}
                        linkGitHub={"https://github.com/markalbrand56/IS-Proyecto"}
                    />
                    <Proyectos
                        title={"Ilustración CSS"}
                        description={"Recreación del Arco del Triunfo de París con CSS"}
                        linkWeb={"https://uvgenios.online/21242/lab04/"}
                        linkGitHub={"https://github.com/jazurdia/cssDraw"}
                    />
                    <Proyectos
                        title={"Chat HTML only"}
                        description={"Chat hecho en un solo archivo HTML"}
                        linkWeb={"https://uvgenios.online/21242/lab05/"}
                        linkGitHub={"https://github.com/jazurdia/chat_lab"}
                    />
                    <Proyectos
                        title={"Juego de Memoria"}
                        description={"Juego de memoria hecho con JavaScript"}
                        linkWeb={"https://uvgenios.online/21242/lab06/"}
                        linkGitHub={"https://github.com/jazurdia/juego-de-memoria"}
                    />
                    <Proyectos
                        title={"Recreación de DuckDuckGo"}
                        description={"Recreación de la página de DuckDuckGo usando las reglas Eslint y Airbnb"}
                        linkWeb={"https://uvgenios.online/21242/lab07/"}
                        linkGitHub={"https://github.com/jazurdia/Linting-lab"}
                    />
                    <Proyectos
                        title={"Calculadora"}
                        description={"Calculadora hecha con React implementando Hooks"}
                        linkWeb={"https://uvgenios.online/21242/lab09/"}
                        linkGitHub={"https://github.com/jazurdia/calculadora"}
                    />
                </div>
            </div>
            <div className={styles.Educacion}>
                <p className={styles.Educaciontitle}>Mi Educación</p>
            </div>

        </div>
    )
}

export default App
