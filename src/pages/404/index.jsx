import { Link } from 'react-router-dom';
import styles from './404.module.css'


const PageNotFund = () => {
    return (
        <div className={styles.notfound_container}>
            <h1>
                404 
            </h1>
            <h3>
                Page Not Found
            </h3>
            <Link to="/">Voltar</Link>
        </div>
    )

}

export default PageNotFund;