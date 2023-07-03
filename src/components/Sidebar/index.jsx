import styles from './Sidebar.module.css'
import { useState } from 'react'
import { GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { IoLogoBuffer }from 'react-icons/io'
import { BsFillBoxFill } from 'react-icons/bs'
const Sidebar = () => {

    const [ showSideBar, setShowSideBar] = useState(true);


    return (
        <section className={ showSideBar ?  styles.sidebar : styles.sidebarclose} >
            <div className={styles.top_content}>

                <div className={ showSideBar ? styles.sidebar_header : styles.sidebar_header_close}>
                    <h1 className={styles.title}>CymaLog</h1>
                    {showSideBar ? 
                        <AiOutlineCloseCircle size="25"onClick={() => setShowSideBar(!showSideBar)}/> : 
                        <GiHamburgerMenu size="25"onClick={() => setShowSideBar(!showSideBar)}/>
                    }
                </div>

                <div className={styles.navlinks_container}>
                    <ul className={styles.navlinks}>
                        <li>
                            <BiHomeAlt size="25" />
                            <Link>Home</Link>
                        </li>
                        <li>
                            <FiUsers size="25" />
                            <Link>Users</Link>
                        </li>
                        <li>
                            <IoLogoBuffer size="25"  />
                            <Link>Logs</Link>
                        </li>
                        <li>
                            <BsFillBoxFill size="25" />
                            <Link>Products</Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={styles.social}>
                <CgProfile size="30"/>
                <div className={showSideBar ? styles.profile : styles.profile_close}>
                    <p>Ryan</p>
                    <span>ryan@gmail.com</span>
                </div>
            </div>
        </section>
    )
}


export default Sidebar;


