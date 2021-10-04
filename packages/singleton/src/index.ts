import express from 'express';
import { MongoHelper } from './mongo-helper-singleton-2';
const app = express();

app.post('/', async (req, res) => {
  const userModel = await MongoHelper.instance.getColletion('users');
  await userModel.insertOne({ name: 'Emylaine Patricia Andrade Fernandes' });
  res.send('usuário criado');
});

app.get('/', async (req, res) => {
  const userModel = await MongoHelper.instance.getColletion('users');
  const users = await userModel.find().toArray();
  res.send({ users });
});

app.listen(5050, () => console.log('Server running'));
