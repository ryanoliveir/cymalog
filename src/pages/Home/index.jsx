import styles from './Home.module.css'
import Sidebar from 'components/Sidebar';
import Banner from 'components/Banner';
const Home = () => {
    return (
        <div className={styles.home}>
            <div>
                <Sidebar />
            </div>
            <div className={styles.home_content}>
                <div className={styles.home_header}>
                    <Banner />
                </div>
            </div>
        </div>
    )
}


export default Home;