const fetch = require('node-fetch');
const Pet = require('../../models/pet');

module.exports = {
    getAllCats,
    getAllDogs,
    getCatDetail,
    getDogDetail
};

const API_URL = "https://api.petfinder.com/v2/animals?type=";

async function getAllCats(req, res) {
    const token = await getToken();
    // console.log(token);
    const results = await fetch(`${API_URL}cat`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const catData = formatPetData(results.animals)
    res.json(catData);
}
async function getAllDogs(req, res) {
    const token = await getToken();
    // console.log(token);
    const results = await fetch(`${API_URL}dog`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const dogData = formatPetData(results.animals)
    res.json(dogData);
}
async function getCatDetail(req, res) {
    const token = await getToken();
    // console.log(token);
    const results = await fetch(`${API_URL}cat/`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const catData = formatPetData(results.animals)
    res.json(catData);
}
async function getDogDetail(req, res) {
    const token = await getToken();
    // console.log(token);
    const results = await fetch(`${API_URL}dog/`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const dogData = formatPetData(results.animals)
    res.json(dogData);
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
        age: a.age,
        gender: a.gender,
        size: a.size,
        apiId: a.id,
        species: a.species,
        breed: a.breeds.primary,
        adoptable: a.adoptable,
        spayedNeutered: a.attributes.spayed_neutered,
        houseTrained: a.attributes.house_trained,
        shotsCurrent: a.attributes.shots_current,
        declawed: a.attributes.declawed,
        children: a.environment.children,
        cat: a.environment.cat,
        dog: a.environment.dog,
        photos: a.photos.map(p => p.full),
        status: a.status,
        publishedAt: a.published_at,
        emailContact: a.contact.email,
        phoneContact: a.contact.phone,
        addressContact: a.contact.address.address1,
        cityAddressContact: a.contact.address.city,
        stateAddressContact: a.contact.address.state,
        postcodeAddressContact: a.contact.address.postcode,
        countryAddressContact: a.contact.address.country,
        organization: a._links.organization
    }));
}


