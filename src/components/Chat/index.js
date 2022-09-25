import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ChatsList from './ChatsList';
import ChatWindow from './ChatWindow';
import { useDispatch, useSelector } from 'react-redux';
import { chatSelector } from '../../redux/reducers/chatReducer/chatSelector';
import { messageSelector } from '../../redux/reducers/messageReducer/messageSelector';

export default function MainChat() {
	const dispatch = useDispatch();

	const chats = useSelector(chatSelector);
	const messages = useSelector(messageSelector);

	let { roomid } = useParams();
	let disButt = false;
	if (!roomid) roomid = chats[0].id;

	const messagesNew = messages.filter((i) => i.roomid === roomid);

	if (chats.length < 2) disButt = true;

	const [author, setAuthor] = useState('');
	const [text, setText] = useState('');

	const [chatName, setChatName] = useState('');
	const inputRef = useRef(null);

	const navigate = useNavigate();

	const handlerAddMessage = () => {
		const mess = {
			roomid,
			author,
			text,
		};
		dispatch({ type: 'message/add', payload: mess });
		setAuthor(() => '');
		setText(() => '');
	};

	const handlerDelChatRoom = (event, idDel) => {
		event.preventDefault();
		const firstId = chats[0].id;
		dispatch({ type: 'message/delete/all', payload: idDel });
		dispatch({ type: 'chat/delete', payload: idDel });
		navigate(`/chat/${firstId}`);
	};

	const handlerAddChatRoom = (e) => {
		e.preventDefault();
		const add = {
			id: uuidv4(),
			name: chatName,
		};
		dispatch({ type: 'chat/add', payload: add });
		setChatName(() => '');
		navigate(`/chat/${add.id}`);
	};

	const botData = useCallback(() => {
		setTimeout(() => {
			if (
				messages.length > 0 &&
				messages[messages.length - 1].author !== 'Bot'
			) {
				let lastAuthor = messages[messages.length - 1].author;
				dispatch({
					type: 'message/add',
					payload: { roomid, author: 'Bot', text: `Привет, ${lastAuthor}!!!` },
				});
			}
		}, 1500);
	}, [roomid, dispatch, messages]);

	useEffect(() => {
		botData();
		focusTExtField(inputRef.current);
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
					<Button
						disabled={chatName ? false : true}
						variant='outlined'
						href='#outlined-buttons'
						onClick={handlerAddChatRoom}
					>
						Add chat
					</Button>
				</Box>
				<Box sx={{ marginTop: 1 }}>
					<TextField
						required
						id='outlined-required'
						label='Chat name'
						value={chatName}
						onChange={(e) => {
							setChatName(e.target.value);
						}}
					/>
				</Box>
				<List
					component='nav'
					sx={{ position: 'relative', overflow: 'auto', maxHeight: 220 }}
				>
					{chats.map((e) => (
						<ChatsList
							key={uuidv4()}
							e={e}
							handlerDelChatRoom={handlerDelChatRoom}
							disButt={disButt}
						/>
					))}
				</List>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '250px',
				}}
			>
				<Box>{roomid}</Box>
				<List
					sx={{
						width: '100%',
						bgcolor: 'background.paper',
						position: 'relative',
						overflow: 'auto',
						maxHeight: 220,
					}}
				>
					{messagesNew.map((e) => {
						return (
							<ChatWindow
								key={uuidv4()}
								author={e.author}
								text={e.text}
							/>
						);
					})}
				</List>
			</Box>

			<Box sx={{ width: '230px' }}>
				<Box sx={{ marginTop: 1 }}>
					<TextField
						inputRef={inputRef}
						required
						id='outlined-required'
						label='Name'
						value={author}
						onChange={(e) => {
							setAuthor(e.target.value);
						}}
					/>
				</Box>
				<Box sx={{ marginTop: 1 }}>
					<TextField
						required
						id='outlined-required'
						label='Message'
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
				</Box>
				<Box sx={{ marginTop: 1 }}>
					<Button
						variant='outlined'
						disabled={text && author ? false : true}
						onClick={handlerAddMessage}
					>
						Primary
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
