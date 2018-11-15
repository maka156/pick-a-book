const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 300},
    image: {type: String, required: true, max: 500}
});

module.exports = mongoose.model('Book', BookSchema);