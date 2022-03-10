const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/pets
router.get('/cats', petsCtrl.getAllCats);
router.get('/dogs', petsCtrl.getAllDogs);
router.get('/cats/:catName', petsCtrl.getCatDetail);

module.exports = router;