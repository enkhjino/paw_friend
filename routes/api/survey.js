const express = require('express');
const router = express.Router();
const surveysCtrl = require('../../controllers/api/survey');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/pets
router.post('/survey', surveysCtrl.addSurvey);

module.exports = router;