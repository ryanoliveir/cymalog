import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Register.module.css'
import Input from 'components/Input'
import Button from 'components/Button'

const RegisterForm = () => {

    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ passwordConfirm, setPasswordConfirm] = useState('');

    return (
        <section>
            <form className={styles.register_form}>
                <h1 className={styles.title}>Criar Conta</h1>
                <Input 
                  label="Nome Completo"  
                  value={name} 
                  type="text" 
                  id="name"
                  onChanged={ value => setName(value)}
                />
                <Input 
                  label="E-mail"
                  value={email}  
                  type="text" 
                  id="email"
                  onChanged={value => setEmail(value)}
                />
                <Input 
                  label="Senha"
                  value={password} 
                  type="password"  
                  id="password"
                  onChanged={value => setPassword(value)}
                />
                <Input 
                  label="Confirme sua senha"
                  value={passwordConfirm} 
                  type="password"  
                  id="password-confirm"
                  onChanged={value => setPasswordConfirm(value)}
                />
                <Button label="Confirmar" type="submit"/>
            </form>

            <div className={styles.links}>
                <Link> Esquece sua senha?</Link>
                <Link to="/"> Voltar ao login</Link>
            </div>
        </section>
    )
}

export default RegisterForm;
