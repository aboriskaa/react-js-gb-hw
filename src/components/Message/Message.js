import React from 'react'
import styles from './Message.module.scss';

export default function Message({ mess }) {
    return (
        <div className={styles.messageBox}>
            <p className={styles.messageBoxTxt}>Сообщение из компонента App: </p>
            <p className={styles.messageBoxMessage}>{mess}</p>
        </div>
    )
}
