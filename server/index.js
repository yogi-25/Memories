import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/memes', postRoutes);
//const mongoose = require('mongoose'); 
app.get('/',(req,res) => {
  res.send("Hello to meme stream");
});
//const CONNECTION_URL = 'mongodb+srv://yogi-25:Idea12345@cluster0.fs8vy.mongodb.net/<dbname>?retryWrites=true&w=majority';
const CONNECTION_URL = 'mongodb+srv://yogita_25:pass123@cluster0.fs8vy.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
