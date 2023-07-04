import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div>
                Welcome to<h1>CYMALOG</h1>
            </div>
            <div className={styles.banner_image_container}>
                <img 
                    src={process.env.PUBLIC_URL + 'assets/logo.png'}
                    alt='Banner'
                />
            </div>
        </div>
        
    )
}

export default Banner;
