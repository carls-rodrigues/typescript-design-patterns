import { Collection, MongoClient } from 'mongodb';
import env from './env';
export class MongoHelper {
  //@ts-ignore
  private client: MongoClient = null;
  private static _instance: MongoHelper;
  private constructor() {}

  static get instance(): MongoHelper {
    if (!MongoHelper._instance) {
      MongoHelper._instance = new MongoHelper();
    }
    return MongoHelper._instance;
  }

  async connect(): Promise<void> {
    console.log('Trying to connect');
    this.client = await MongoClient.connect(env.mongoUrl);
    console.log('Connected');
  }

  async getColletion(name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect();
    }
    return this.client.db().collection(name);
  }
}
