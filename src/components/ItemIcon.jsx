import styles from './ItemIcon.module.css';
import propTypes from 'prop-types';

function ItemIcon(props) {
    const handleClick = () => {
        window.open(props.url, "_blank")
    }

    return (
        <button className={styles.itemicon} onClick={handleClick}>
            <img src={props.icon} className={styles.icon} alt="icon" />

        </button>
    )
}

ItemIcon.propTypes = {
    icon: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}

export default ItemIcon
