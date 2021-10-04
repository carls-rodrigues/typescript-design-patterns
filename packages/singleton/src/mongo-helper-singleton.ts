import { Collection, MongoClient } from 'mongodb';
import env from './env';
export default {
  //@ts-ignore
  // client: new MongoClient(env.mongoUrl, this.config),
  client: null as unknown as MongoClient,
  isConnected: false,
  config: {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  async connect(): Promise<void> {
    console.log('Trying to connect');
    this.client = await MongoClient.connect(env.mongoUrl);
    console.log('Connected');
  },

  async getColletion(name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect();
    }
    return this.client.db().collection(name);
  },
};
