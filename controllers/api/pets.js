const fetch = require('node-fetch');
const Pet = require('../../models/pet');

module.exports = {
    getAllCats
};

const API_URL = "https://api.petfinder.com/v2/animals?type=";

async function getAllCats(req, res) {
    const token = await getToken();
    console.log(token);
    const results = await fetch(`${API_URL}cat`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const catData = formatPetData(results.animals)
    res.json(catData);
}


//helper functions

const URL = `https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret=${process.env.SECRET_KEY}`;

async function getToken() {
    const tokenObj = await fetch(URL, {
        method: "POST",
        body: new global.URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'sgERZdZnVh4eM0MIQYY9olcKbJdTscBcYMp0IJw2oqQNL36lhe',
            client_secret: 'VAQmxP6KZLRqHRr9uF9VAU6tLY0MRSGCzUw7hDdf'
        })
    }).then(res => res.json());
    return tokenObj.access_token;
}

function formatPetData(animals) {
    return animals.map(a => ({
        name: a.name,
        description: a.description,
        apiId: a.id,
        species: a.species,
        spayedNeutered: a.attributes.spayed_neutered,
        houseTrained: a.attributes.house_trained,
        photos: a.photos.map(p => p.full)
    }));
}


