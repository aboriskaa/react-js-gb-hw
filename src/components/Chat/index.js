import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import ChatsList from './ChatsList';
import ChatWindow from './ChatWindow';


export default function MainChat() {

    const navigate = useNavigate();
    let params = useParams();
    let id = '';

    const [loading, setLoading] = useState(false);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [chatList, setChatList] = useState([{ id: uuidv4(), name: 'default' }]);
    const [messageList, setMessageList] = useState([{ roomid: chatList[0].id, author: 'Bot', text: `Можем начать общаться!` }]);
    const [chatName, setChatName] = useState('');
    const inputRef = useRef(null);


    console.log(chatList)
    params.roomid ? id = params.roomid : id = chatList[0].id

    console.log(id)

    const handlerAddMessage = () => {
        setLoading(true);
        setMessageList(() => [...messageList, { roomid: id, author, text }]);
        setAuthor(() => '');
        setText(() => '');
    }

    // ? `${params.roomid}` : `${chatList[0].id


    const handlerDelChatRoom = (idDel) => {

        let arr = [];
        arr = chatList.filter((e) => e.id !== idDel)
        setChatList(arr)
        let arr2 = [];
        arr2 = messageList.filter((e) => e.id !== idDel)
        setMessageList(arr2)
        console.log(`/user/${chatList[0].id}`)
        navigate(`/user/${chatList[0].id}`)

    }

    const handlerAddChatRoom = () => {
        setChatList([...chatList, { id: uuidv4(), name: chatName }])
        setChatName(() => '');
    }

    const botData = useCallback(() => {
        setTimeout(() => {
            if (messageList.length > 0 && messageList[messageList.length - 1].author !== "Bot") {
                let lastAuthor = messageList[messageList.length - 1].author;
                setMessageList([...messageList, { roomid: id, author: 'Bot', text: `Привет, ${lastAuthor}!!!` }]);
            }
        }, 1500);
    }, [messageList, setMessageList, id]);

    useEffect(() => {
        botData();
        setLoading(false);
        focusTExtField(inputRef.current)
    }, [botData]);

    function focusTExtField(input) {
        if (input) {
            input.focus();
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <Box width={'230px'}>

                <Box>
                    <Button disabled={chatName ? false : true} variant="outlined" href="#outlined-buttons" onClick={handlerAddChatRoom}>
                        Add chat
                    </Button>
                </Box>
                <Box sx={{ marginTop: 1 }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Chat name"
                        value={chatName}
                        onChange={(e) => { setChatName(e.target.value) }}
                    />
                </Box>
                <List component="nav" sx={{ position: 'relative', overflow: 'auto', maxHeight: 220 }}>
                    {chatList.map((e) => <ChatsList key={uuidv4()} e={e} handlerDelChatRoom={handlerDelChatRoom} />)}
                </List>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px' }}>
                <Box>
                    {id}
                </Box>
                <List sx={{ width: '100%', bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 220 }}>
                    {[...messageList].filter((i) => i.roomid === id).map((e) => {
                        return <ChatWindow key={uuidv4()} author={e.author} text={e.text} />
                    })}
                </List>
            </Box>

            <Box sx={{ width: '230px' }}>
                <Box sx={{ marginTop: 1 }}>
                    <TextField
                        inputRef={inputRef}
                        required
                        id="outlined-required"
                        label="Name"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </Box>
                <Box sx={{ marginTop: 1 }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Message"
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                    />
                </Box>
                <Box sx={{ marginTop: 1 }}>
                    <Button disabled={(text && author) ? false : true} variant="outlined" onClick={handlerAddMessage}>Primary</Button>
                </Box>
            </Box>
        </Box>
    )
}
