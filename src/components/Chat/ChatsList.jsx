import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';


export default function ChatsList({ e, handlerDelChatRoom, disButt }) {

    const navigate = useNavigate();

    return (
        <>
            <ListItem button={true}  >
                <ListItemText primary={e.name} onClick={() => { navigate(`/chat/${e.id}`) }} />
                <Button disabled={disButt} variant="outlined" onClick={(event) => { handlerDelChatRoom(event, e.id) }}>Del</Button>
            </ListItem>
            <Divider />
        </>
    )
}
