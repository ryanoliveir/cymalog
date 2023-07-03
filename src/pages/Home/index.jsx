import styles from './Home.module.css'
import Sidebar from 'components/Sidebar';

const Home = () => {
    return (
        <div className={styles.home}>
            <Sidebar />
        </div>
    )
}


export default Home;