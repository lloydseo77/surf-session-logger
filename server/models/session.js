const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    title: {
    type: String,
    required: true
    },
    snippet: {
    type: String,
    required: true
    },
    body: {
    type: String,
    required: true
    }
}, { timestamps: true });

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;