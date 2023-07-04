import styles from './UserCard.module.css'

const UserCard = ({id, fullName, email}) => {

    return (
        <div  className={styles.usercard}>
            <h2>{fullName}</h2>
            <p>{email}</p>
            <p>ID: {id}</p>
        </div>
    )
}


export default UserCard;
