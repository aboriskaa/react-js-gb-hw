import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';

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
