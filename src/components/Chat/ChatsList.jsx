import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';


export default function ChatsList({ e, handlerDelChatRoom }) {

    const navigate = useNavigate();
    return (
        <>
            <ListItem button={true} onClick={() => { navigate(`/chat/${e.id}`) }} >
                <ListItemText primary={e.name} />
                <Button variant="outlined" onClick={() => { handlerDelChatRoom(e.id) }}>Del</Button>
            </ListItem>
            <Divider />
        </>
    )
}
