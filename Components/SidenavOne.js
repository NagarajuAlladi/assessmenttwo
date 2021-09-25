import React from 'react'
import styles from '../styles/SidenavOne.module.css'
import { FaBeer } from 'react-icons/fa';

function SidenavOne() {
    function toggleMenu(){
        let navigation=document.querySelector('.navigation')
        navigation.classList.toggle('active');
    }
    
    return (
        <div className={styles.body}>
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>OpenSeats</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>TableTalk</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>Company</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>Messages</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>Team</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>Notifications</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>Refferals</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>LiveRooms</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>Settings</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.icon}><FaBeer className={styles.fa}/></span>
                        <span className={styles.title}>Help</span>
                    </a>
                </li>
            </ul>
            
        </div>

        <div className={styles.menuBar}>
            
        </div>
        </div>
    )
}

export default SidenavOne
