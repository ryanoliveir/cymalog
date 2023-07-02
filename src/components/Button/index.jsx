import styles from './Button.module.css'


const Button = ({label, type}) => {
    return (
        <>
            <button className={styles.button} type={type}>{label}</button>
        </>
    )
}


export default Button;
