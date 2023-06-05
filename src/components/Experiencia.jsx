import styles from "./Experiencia.module.css";
import ItemIcon from "./ItemIcon.jsx";
import sqlserverlogo from "../assets/sqlserver.svg";
import ginlogo from "../assets/ginlogo.svg";

function Experiencia() {


    return (
        <div className={styles.container}>
            <div className={styles.sectioncontainer}>
                <p className={styles.sectionTitles}>Frontend</p>
                <p className={styles.paragraph1}>
                    Valoro los diseños sencillos, eficientes y atractivos. Me decanto por la estética minimalista y la
                    usabilidad. El diseño es una parte fundamental de mi trabajo y lo que más me gusta hacer.
                </p>
                <br/>
                <p className={styles.paragraph2}>
                    Tecnologías que utilizo:
                </p>
                <div className={styles.itemcontainer}>
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}
                        text={"javascript"}
                        url={"https://developer.mozilla.org/es/docs/Web/JavaScript"}
                    />
                    <ItemIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
                              text={"react"}
                              url={"https://es.reactjs.org/"}
                    />
                    <ItemIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}
                              text={"Css"}
                              url={"https://developer.mozilla.org/es/docs/Web/CSS"}
                    />
                    <ItemIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}
                              text={"html"}
                              url={"https://developer.mozilla.org/es/docs/Web/HTML"}
                    />
                </div>
            </div>
            <div className={styles.sectioncontainer}>
                <p className={styles.sectionTitles}>Backend</p>
                <p className={styles.paragraph1}>
                    Me enfoco en desarrollar soluciones eficientes y escalables, asegurando un alto rendimiento y una
                    gestión adecuada del lado del servidor.
                </p>
                <p className={styles.paragraph2}>
                    Tecnologías que utilizo:
                </p>
                <div className={styles.itemcontainer}>
                    <ItemIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"}
                              text={"python"}
                              url={"https://www.python.org/"}
                    />
                    <ItemIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"}
                              text={"java"}
                              url={"https://www.java.com/es/"}
                    />
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"}
                        text={"c++"}
                        url={"https://es.wikipedia.org/wiki/C%2B%2B#:~:text=C%2B%2B%20es%20un%20lenguaje,C%2B%2B%20es%20un%20lenguaje%20h%C3%ADbrido."}
                    />
                    <ItemIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"}
                              text={"go"}
                              url={"https://golang.org/"}
                    />
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}
                        text={"postgresql"}
                        url={"https://www.postgresql.org/"}
                    />
                    <ItemIcon icon={sqlserverlogo}
                              text={"sqlserver"}
                              url={"https://www.microsoft.com/es-es/sql-server/sql-server-2019"}
                    />
                    <ItemIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"}
                              text={"django"}
                              url={"https://www.djangoproject.com/"}
                    />
                    <ItemIcon icon={ginlogo}
                              text={"gin"}
                              url={"https://gin-gonic.com/"}
                    />
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"}
                        text={"firebase"}
                        url={"https://firebase.google.com/"}
                    />
                </div>
            </div>
            <div className={styles.sectioncontainer}>
                <p className={styles.sectionTitles}>Otras tecnologías</p>
                <p className={styles.paragraph1}>Estas son otras tenologías que he utilizado en mis proyectos:</p>
                <p className={styles.paragraph2}> <br/> <br/> </p>
                <div className={styles.itemcontainer}>
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"}
                        text={"kotlin"}
                        url={"https://kotlinlang.org/"}
                    />
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"}
                        text={"android"}
                        url={"https://developer.android.com/"}
                    />
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"}
                        text={"npm"}
                        url={"https://www.npmjs.com/"}
                    />
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"}
                        text={"yarn"}
                        url={"https://yarnpkg.com/"}
                    />
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}
                        text={"git"}
                        url={"https://git-scm.com/"}
                    />
                    <ItemIcon
                        icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"}
                        text={"jetbrains"}
                        url={"https://www.jetbrains.com/es-es/"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Experiencia;
