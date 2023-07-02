import styles from './Login.module.css'
import LoginForm from 'components/LoginForm'



const Login = () => {
    return (
        <div className={styles.login}>
            <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="CymaDigital" />
            <LoginForm />
        </div>
    )
}


export default Login;