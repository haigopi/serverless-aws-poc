import { DynamoDB } from 'aws-sdk';

let dbClient = new DynamoDB.DocumentClient();


if (process.env.IS_OFFLINE) {
	
	const DYNAMODB_PORT = process.env.LOCAL_DYNAMODB_PORT
	console.log('Offline:', process.env.IS_OFFLINE, " Port: ", DYNAMODB_PORT);

	dbClient = new DynamoDB.DocumentClient({
		region: 'localhost',
		endpoint: `http://localhost:${DYNAMODB_PORT}`,
		accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
		secretAccessKey: 'DEFAULT_SECRET'
	});
}
console.log('DBClient: ', dbClient);

export { dbClient };
