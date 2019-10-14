import { ApolloServer } from 'apollo-server-lambda';
import { resolvers } from './resolvers';
import typeDefs from './types.graphql';

export const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,
	introspection: true,
	playground: true
});
