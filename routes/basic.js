import express from 'express';
import City from '../models/cityModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
	const cities = await City.find();
	res.status(200).json(cities);
});

router.get('/:id', async (req, res) => {
	const city = await City.findOne({ _id: req.params.id });
	res.status(200).json(city);
});

router.post('/search', async (req, res) => {
	console.log(req.body.searchString);
	let cities = [];
	if (req.body.searchString.length < 1) res.status(200).json({ cities: [] });
	if (req.body.searchString.length > 0) {
		cities = await City.find()
			.where({
				city: { $regex: req.body.searchString, $options: 'i' },
			})
			.limit(5);
	}
	res.status(200).json({ cities: cities });
});

export default router;
