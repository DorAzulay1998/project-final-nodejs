import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Received GET request to /api/dogs');
  try {
    console.log('Waiting 1 second before fetching dog image...');
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Fetching random dog image from external API...');
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    console.log('Dog image fetched successfully:', data.message);
    res.json(data);
  } catch (error) {
    console.error('Error fetching dog image:', error);
    res.status(500).json({ message: 'Error fetching dog image' });
  }
});

export default router;