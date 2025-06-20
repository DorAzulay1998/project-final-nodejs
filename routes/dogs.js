import express from 'express';
import { fetchRandomDog } from '../controllers/dogController.js';

const router = express.Router();

router.get('/', fetchRandomDog);

export default router;