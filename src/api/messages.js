import server from './http';

export const getMessage = async () => server.get('jokes/random');
