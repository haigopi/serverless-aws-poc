import { CustomLink } from '../model/customLink';
import { deserialize } from 'class-transformer';
import createLink from '../opearations/createLink';
import listLinks from '../opearations/listLinks';
import getLink from '../opearations/getLink';
import deleteLink from '../opearations/deleteLink';
import { DateTimeResolver} from 'graphql-scalars';

export const resolvers = {
	DateTime: DateTimeResolver,
	Query: {
		echo: () => {
			return (
				'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!' +
				process.env.Links_Table
			);
		},
		listLinks: () => {
			return listLinks();
		},
		getLink: (_: any, args: { id: string }) => {
			console.log('Input: ', args.id);
			return getLink(args.id);
		}
	},
	Mutation: {
		createLink: (_: any, args: any) => {
			let link: CustomLink = deserialize(CustomLink, JSON.stringify(args.input));
			console.log('Deserialize: ', link);
			let cLink = createLink(link);
			return cLink;
		},
		deleteLink: (_: any, args: { id: string }) => {
			console.log('Delete Input: ', args.id);
			let cLink = deleteLink(args.id);
			return cLink;
		}
	}
};
