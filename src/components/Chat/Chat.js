import React, { useEffect, useState, useCallback } from 'react'
import styles from './Chat.module.scss';

export default function Chat({ messageList, setMessageList }) {

    const [loading, setLoading] = useState(false);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handlerClick = () => {

        if (author.length > 0 && text.length > 0) {
            setLoading(true);
            setMessageList([...messageList, { author, text }]);
            setAuthor(''); setText('');
        } else {
            console.log('Не условие')
        }
    }
    const botData = useCallback(() => {
        setTimeout(() => {
            if (messageList.length > 0 && messageList[messageList.length - 1].author !== "Bot") {
                let lastAuthor = messageList[messageList.length - 1].author;
                setMessageList([...messageList, { author: 'Bot', text: `Привет, ${lastAuthor}!!!` }]);
                console.log(messageList)
            }
        }, 1500);
    }, [messageList, setMessageList]);


    useEffect(() => {
        botData();
        setLoading(false);
    }, [botData]);

    return (
        <div className={styles.chat}>
            <div className={styles.chatMessages}>
                <ul className={styles.chatMessagesList}>
                    {[...messageList].map((e, idx) => {
                        return (
                            <li key={idx + 'li'}><b key={idx + 'b'}>{e.author}-->></b>{e.text}</li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.chatForm}>
                <label htmlFor="author">Name:</label>
                <input disabled={loading} type="text" name="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                <label htmlFor="text">Message:</label>
                <input disabled={loading} type="text" name="text" value={text} onChange={(e) => { setText(e.target.value) }} />
                <button disabled={loading} onClick={handlerClick}>Send</button>
            </div>
        </div>
    )
}
