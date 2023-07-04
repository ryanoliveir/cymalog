import styles from './Users.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Banner from 'components/Banner';
import UserCard from 'components/UserCard';

const Users = () => {

    const [ users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const URL = 'http://localhost:3000/users';
        fetch(URL)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            })
    },[])


    return (
        <div className={styles.users}>
            <div>
                <Sidebar />
            </div>
            <div className={styles.users_content}>
                <div className={styles.users_header}>
                    <Banner />
                </div>
                <section className={styles.users_container}>
                    <h1>Usuarios</h1>
                    <div className={styles.users}>
                        {users.map( user => {
                            return (
                                <UserCard
                                 id={user.id} 
                                 fullName={user.fullName} 
                                 email={user.email} 
                                />
                            )
                        })}
                    </div>
                </section>
            </div>

        </div>
    )
}


export default Users;