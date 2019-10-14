import { dbClient } from '../dynamodb/dbClient';
import promisify from '../handyUtils/promisify';
import { CustomLink } from '../model/customLink';
import uuid from 'uuid-random';

const createCustomLink = (link: CustomLink) =>
	promisify((callback: any) => {
		link.id = uuid();
		console.log('Link: ', link);
		const params = {
			Item: link,
			TableName: process.env.Events_Table,
			Key: link.id
		};

		return dbClient.put(params, (err, data) => {
			console.log('Data: ', data);
			if (err) {
				callback(err);
			}
			callback(null, params.Item);
		});
	}).then((r) => r);

export default createCustomLink;
