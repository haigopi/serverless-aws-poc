import { indexElasticSearch } from './elasticSearch/stream/process';
import {server} from './schema/server';

exports.graphqlHandler = server.createHandler({
	cors: {
		origin: '*',
		credentials: true
	}
});

export async function processStreams(event: any) {
	console.log(' ==> Event Recieved: ', event, 'is Offline: ', process.env.IS_OFFLINE);
	
	if (process.env.IS_OFFLINE) {
		console.log('Running Offline and not processing events');
	} else {
		console.log(' ==> Not Offline so Processing ', event);
		await indexElasticSearch(event);
	}
}
