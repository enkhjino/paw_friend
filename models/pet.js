const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    apiId: Number,
    name: String,
    description: String,
    age: String,
    gender: String,
    size: String,
    species: String,
    breeds: String,
    spayedNeutered: Boolean,
    houseTrained: Boolean,
    shotsCurrent: Boolean,
    children: Boolean,
    dogs: Boolean,
    cats: Boolean,
    photos: [String],
    status: String,
    published_at: String,
    status: String,
    publishedAt: String,
    emailContact: String,
    phoneContact: String,
    addressContact: String,
    cityAddressContact: String,
    stateAddressContact: String,
    postcodeAddressContact: String,
    countryAddressContact: String
});