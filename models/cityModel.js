import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
	city: String,
	city_ascii: String,
	lat: String,
	lng: String,
	country: String,
	iso2: String,
	iso3: String,
	admin_name: String,
	capital: String,
	population: String,
	id: String,
});

const model = mongoose.model('city', brandSchema);

export default model;
