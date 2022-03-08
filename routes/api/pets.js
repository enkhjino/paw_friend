const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/pets/cats
router.get('/cats', petsCtrl.getAllCats);

module.exports = router;