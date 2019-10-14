import { dbClient } from '../dynamodb/dbClient';
import promisify from '../handyUtils/promisify';

const deleteLink = (id: String) =>
	promisify((callback: any) => {
		console.log('Delete Link: ', id);
		const params = {
			TableName: process.env.Links_Table,
			Key: { id }
		};

		return dbClient.delete(params, callback);
	})
		.then((r: any) => {
			console.log('Delet Resulted Link: ', r, r.Item);
			return r;
		})
		.catch((err: any) => {
			console.log(err);
		});

export default deleteLink;
