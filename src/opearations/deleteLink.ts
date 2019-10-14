import { dbClient } from '../dynamodb/dbClient';
import promisify from '../handyUtils/promisify';

const deleteEvent = (eventId: String) =>
	promisify((callback: any) => {
		console.log('Delete Event: ', eventId);
		const params = {
			TableName: process.env.Events_Table,
			Key: { eventId }
		};

		return dbClient.delete(params, callback);
	})
		.then((r: any) => {
			console.log('Delet Resulted Event: ', r, r.Item);
			return r;
		})
		.catch((err: any) => {
			console.log(err);
		});

export default deleteEvent;
