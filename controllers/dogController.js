import { getRandomDogImage } from '../services/dogService.js';

export async function fetchRandomDog(req, res) {
  console.log('Received GET request to /api/dogs');
  try {
    console.log('Calling dogService to fetch image...');
    const data = await getRandomDogImage();
    console.log('Dog image fetched successfully:', data.message);
    res.json(data);
  } catch (error) {
    console.error('Error fetching dog image:', error);
    res.status(500).json({ message: 'Error fetching dog image' });
  }
}