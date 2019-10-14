import { dbClient } from '../dynamodb/dbClient';
import promisify from '../handyUtils/promisify';

const getEvent = (eventId: String) =>
	promisify((callback: any) => {
		console.log('Get Event: ', eventId);
		const params = {
			TableName: process.env.Events_Table,
			Key: { eventId }
		};

		return dbClient.get(params, callback);
	})
		.then((r: any) => {
			console.log('Resulted Event: ', r.Item);
			return r.Item;
		})
		.catch((err: any) => {
			console.log(err);
		});

export default getEvent;
