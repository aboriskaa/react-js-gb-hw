export const log = (store) => (next) => (action) => {
	const timeOut = 1000;
	let data = 'No data in payload';
	if (action.payload) data = action.payload;
	console.log('Action: ', action);
	console.log('Dispatching type: ', action.type);
	console.log('Dispatching payload: ', data);
	console.log('Store before: ', store.getState());
	console.log('Time out: ', timeOut);
	setTimeout(function () {
		next(action);
		console.log('store after:', store.getState());
	}, timeOut);
};
