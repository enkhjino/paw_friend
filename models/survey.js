const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    species:{type: String, enum:["dog", "cat"]},
    experience:{type: String, enum:["first-time", "previous", "current"]},
    havePets:{type: String, enum:["no dog(s) or cat(s)", "cat(s)", "dog(s)", "dog(s) and cat(s)", "children"]},
    age:{type: String, enum:["baby", "young", "adult", "senior"]},
    gender:{type: String, enum:["female", "male"]},
    size:{type: String, enum:["small", "medium", "large", "xLarge"]}
});

module.exports = mongoose.model('Survey', surveySchema)