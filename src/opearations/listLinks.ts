import { dbClient } from '../dynamodb/dbClient';
import promisify from '../handyUtils/promisify';

const listLinks = () =>
	promisify((callback: any) => {
		const params = {
			TableName: process.env.Links_Table
		};
		return dbClient.scan(params, callback);
	}).then((r: any) => {
		console.log("List Links: ", r);
		return r.Items;
	});

export default listLinks;
