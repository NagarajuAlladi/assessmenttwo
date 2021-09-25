import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.outerDiv}>
            <div className={styles.leftDiv}>
                <h2>OpenSeats</h2>
            </div>
            <div className={styles.rightDiv}>
                <button>Job Drafts</button>
                <button className={styles.buttonTwo}>+New Department</button>
            </div>
        </div>
    )
}

export default Navbar
