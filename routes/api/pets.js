const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/pets
router.get('/cats', petsCtrl.getAllCats);
router.get('/cats/:id', petsCtrl.getCatDetail);
router.get('/dogs', petsCtrl.getAllDogs);

module.exports = router;