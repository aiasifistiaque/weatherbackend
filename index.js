import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import cityRoute from './routes/basic.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

//routes
app.use('/city', cityRoute);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running on port ${port}`));
