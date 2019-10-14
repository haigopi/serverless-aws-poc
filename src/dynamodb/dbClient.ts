import { DynamoDB } from 'aws-sdk';

let dbClient = new DynamoDB.DocumentClient();

const DYNAMODB_PORT = process.env.LOCAL_DYNAMODB_PORT
console.log('Running offline? ', process.env.IS_OFFLINE, DYNAMODB_PORT);

if (process.env.IS_OFFLINE) {
	dbClient = new DynamoDB.DocumentClient({
		region: 'localhost',
		endpoint: `http://localhost:${DYNAMODB_PORT}`,
		accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
		secretAccessKey: 'DEFAULT_SECRET'
	});
}

export { dbClient };
