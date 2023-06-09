import { MongoClient } from 'mongodb'

const config = useRuntimeConfig()

const client = new MongoClient(config.public.mongoDB);

const dbName = "leocao_me"

async function getMongoDBCollection(collectionName: string) {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection(collectionName)
  return collection;
}

export default getMongoDBCollection
