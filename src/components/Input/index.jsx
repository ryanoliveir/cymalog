import styles from './Input.module.css'

const Input = ({label, onChanged, type, value, id}) => {

    const onTyped = (event) => {
        onChanged(event.target.value);
    }
    

    return (
        <div className={styles.input_container}>
            <label htmlFor={id}>{label}</label>
            <input 
                className={styles.input} 
                onChange={onTyped}
                value={value}
                type={type} 
                id={id} 
            />
        </div>
    )
}


export default Input;
