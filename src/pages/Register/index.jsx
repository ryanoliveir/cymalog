import styles from './Register.module.css'
import RegisterForm from 'components/RegisterForm';
const Register = () => {
    return (
        <div className={styles.register}>
            <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="CymaDigital" />
            <RegisterForm />
        </div>
    )
}


export default Register;
