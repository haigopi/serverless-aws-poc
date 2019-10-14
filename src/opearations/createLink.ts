import { dbClient } from '../dynamodb/dbClient';
import promisify from '../handyUtils/promisify';
import { CustomLink } from '../model/customLink';
import uuid from 'uuid-random';

const createCustomLink = (link: CustomLink) =>
	promisify((callback: any) => {
		link.id = uuid();
		
		const params = {
			Item: link,
			TableName: process.env.Links_Table,
			Key: link.id
		};
		console.log('params: ', params);
		return dbClient.put(params, (err, data) => {
			console.log('Data: ', data);
			if (err) {
				callback(err);
			}
			callback(null, params.Item);
		});
	}).then((r) => r);

export default createCustomLink;
