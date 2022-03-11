const fetch = require('node-fetch');
const Survey = require('../../models/survey');

module.exports = {
    addSurvey,
};

async function addSurvey(req, res) {
    const survey = await Survey.create(req.body)
    console.log(survey)
    res.json(survey)
}