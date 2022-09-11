import React, { useEffect, useState, useCallback } from 'react'
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChatWindow from './ChatWindow';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { v4 as uuidv4 } from 'uuid';

export default function Chat({ messageList, setMessageList }) {

    const [loading, setLoading] = useState(false);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const chatListGeneration = (number) => {
        let data = [];
        for (let i = 1; i < number; i++) {
            data.push({ id: uuidv4(), name: `Chat № ${i}`, data: [] })
        }
        return [...data]
    }

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
            }
        }, 1500);
    }, [messageList, setMessageList]);

    useEffect(() => {
        botData();
        setLoading(false);
    }, [botData]);

    return (

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <Box width={'230px'}>
                <List component="nav" sx={{ position: 'relative', overflow: 'auto', maxHeight: 220 }}>
                    {[...chatListGeneration(10)].map((e) => <ChatList key={uuidv4()} e={{ e }} />)}
                </List>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px' }}>
                <List sx={{ width: '100%', bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 220 }}>
                    {[...messageList].map((e, idx) => {
                        return <ChatWindow key={uuidv4()} author={e.author} text={e.text} />
                    })}
                </List>
            </Box>

            <Box sx={{ width: '230px' }}>
                <Box sx={{ marginTop: 1 }}>
                    <TextField
                        autoFocus
                        required
                        id="outlined-required"
                        label="Name"
                        defaultValue={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </Box>
                <Box sx={{ marginTop: 1 }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Message"
                        defaultValue={text}
                        onChange={(e) => { setText(e.target.value) }}
                    />
                </Box>
                <Box sx={{ marginTop: 1 }}>
                    <Button variant="outlined" disabled={loading} onClick={handlerClick}>Primary</Button>
                </Box>
            </Box>
        </Box >
    )
}


function ChatList(e) {
    return (
        <>
            <ListItem button >
                <ListItemText primary={e.name} />
            </ListItem>
            <Divider />
        </>
    )
}
