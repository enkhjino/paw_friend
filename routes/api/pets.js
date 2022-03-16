const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/pets
router.get('/cats', petsCtrl.getAllCats);
router.get('/dogs', petsCtrl.getAllDogs);
router.get('/cats/:apiId', petsCtrl.getCatDetail);
router.get('/dogs/:dogName', petsCtrl.getDogDetail);
router.post('/matches', petsCtrl.getMatches);
router.post('/favorites', petsCtrl.addFavs);
router.post('/unfavorite', petsCtrl.removeFavs);
router.get('/favorites', petsCtrl.getFavs);
module.exports = router;