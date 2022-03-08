const fetch = require('node-fetch');
const Pet = require('../../models/pet');



module.exports = {
    getAllCats
};

const API_URL = "https://api.petfinder.com/v2/animals?type=";

async function getAllCats(req, res) {
    const results = await fetch(`${API_URL}cat`, {
        headers: {Authorization: `Bearer ${getToken()}`}
    }).then(res => res.json());
    console.log(results);
    res.json(results);
}


//helper functions

const URL = `https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.SECRET_KEY}`;

async function getToken() {
    console.log(URL);
    const tokenObj = await fetch(URL, {mode: "cors"}).then(res => res.json());
    console.log(tokenObj);
    return tokenObj.access_token;
}


