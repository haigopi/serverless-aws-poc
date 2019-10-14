import { dbClient } from '../dynamodb/dbClient';
import promisify from '../handyUtils/promisify';

const getLink = (id: String) =>
	promisify((callback: any) => {
		console.log('Get Link: ', id);
		const params = {
			TableName: process.env.Links_Table,
			Key: { id }
		};

		return dbClient.get(params, callback);
	})
		.then((r: any) => {
			console.log('Resulted Link: ', r.Item);
			return r.Item;
		})
		.catch((err: any) => {
			console.log(err);
		});

export default getLink;
