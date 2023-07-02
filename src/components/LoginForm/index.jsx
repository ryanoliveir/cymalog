import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './LoginForm.module.css'
import Input from 'components/Input'
import Button from 'components/Button'


const LoginForm = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSave = (event) => {
        event.preventDefault();
    }

    return (
        <section>
            <form onSubmit={onSave} className={styles.login_form}>
                <h1 className={styles.title}>Login</h1> 
                <Input 
                  label="E-mail"  
                  value={email} 
                  type="text" 
                  id="email"
                  onChanged={ value => setEmail(value)}
                />
                <Input 
                  label="Senha"
                  value={password} 
                  type="password" 
                  id="password"
                  onChanged={value => setPassword(value)}
                />
                <Button label="Entrar" type="submit"/>
            </form>

            <div className={styles.links}>
                <Link> Esquece sua senha?</Link>
                <Link to="/register"> Criar conta</Link>
            </div>
        </section>
    )
}


export default LoginForm;
