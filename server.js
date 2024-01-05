import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const API_ACCESS_KEY = process.env.API_ACCESS_KEY;
const app = express();
const port = process.env.PORT || 3000;
let firstTime = true;
let API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_ACCESS_KEY}&count=4`;

app.use(cors());

app.get('/api/content', async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (firstTime) {
      API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_ACCESS_KEY}&count=8`;
      firstTime = false;
    }
    res.json(data);
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})