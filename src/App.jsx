import styles from './App.module.css';
import Experiencia from "./components/Experiencia.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Proyectos from "./components/Proyectos.jsx";

function App() {
    return (
        <div className={styles.App}>
            <AboutMe/>
            <Experiencia/>
            <Proyectos/>
        </div>
    )
}

export default App
