import React from 'react'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import styles from '../styles/onboarding/Footer.module.css'
function Footer() {
    return (
        <div className={styles.conatiner}>
            <ChatBubbleOutlineIcon style={{color:'white'}}/>
        </div>
    )
}

export default Footer
