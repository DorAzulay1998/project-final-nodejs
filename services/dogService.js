import fetch from 'node-fetch';

export async function getRandomDogImage() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data;
}