import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function ChatWindow({ author, text }) {


    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    {author === 'Bot' ? <Avatar sx={{ bgcolor: deepOrange[500] }}>bot</Avatar> :
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>{author.substring(0, 2)}</Avatar>
                    }

                </ListItemAvatar>
                <ListItemText
                    primary={author}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {text}
                            </Typography>

                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}
