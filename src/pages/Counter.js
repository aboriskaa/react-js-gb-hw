import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer.count)

    return (
        <>
            <Container component="main" position="fixed">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {count}
                </Box>
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyItems: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button variant="contained" onClick={() => dispatch({ type: 'counter/plus' })}>+</Button>
                    <Button variant="contained" sx={{ ml: 8 }} onClick={() => dispatch({ type: 'counter/minus' })}>-</Button>
                </Box>
            </Container>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
            </Box>

        </>
    )
}
