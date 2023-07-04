import styles from './Home.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Banner from 'components/Banner';
import Log from 'components/Log';
const Home = () => {

    const [ logs, setLogs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const URL = 'http://localhost:3000/logs';
        fetch(URL)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setLogs(data);
            })
    },[])


    return (
        <div className={styles.home}>
            <div>
                <Sidebar />
            </div>
            <div className={styles.home_content}>
                <div className={styles.home_header}>
                    <Banner />
                </div>
                <section className={styles.logs_container}>
                    <h1>Logs Disponíveis</h1>
                    <div className={styles.logs}>
                        {logs.map( log => {
                            return (
                                <Log 
                                 id={log.id} 
                                 title={log.title} 
                                 toLog={(route) => navigate('/'+ route)}
                                />
                            )
                        })}
                    </div>
                </section>
            </div>

        </div>
    )
}


export default Home;