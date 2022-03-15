const fetch = require('node-fetch');
const Pet = require('../../models/pet');

module.exports = {
    getAllCats,
    getAllDogs,
    getCatDetail,
    getDogDetail,
    getMatches,
    addFavs,
    getFavs,
    removeFavs
};
const API_URL = "https://api.petfinder.com/v2/animals";
async function getFavs (req, res) {
    const pets = await Pet.find({});
    const favoriteList = pets.filter(p => p.users.includes(req.user._id));
    res.json(favoriteList);
}

async function addFavs (req, res) {
    const token = await getToken();
    const favorite = await fetch(`${API_URL}/${req.body.apiId}`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    let pet = await Pet.find({apiId: req.body.apiId})
    if (pet.length) {
        pet.users.push(req.user)
        pet.save();
        res.json(pet);
    }else if (req.body.apiId === favorite.animal.id) {
        pet = await Pet.create(req.body)
        pet.users.push(req.user);
        pet.save();
    }else{
        throw new Error("Bad Call");
    }   
}

async function removeFavs (req, res) {
    
    const pet = await Pet.find({_id: req.body._id})
    
    const idx = pet[0].users.indexOf(req.user._id)
    pet[0].users.splice(idx, 1)
    await pet[0].save();
    const pets = await Pet.find()
    const favoriteList = pets.filter(p => p.users.includes(req.user._id))
    res.status(201).json(favoriteList)
}


async function getMatches(req, res) {
    const token = await getToken();
    const matches = await fetch(`${API_URL}?type=${req.body.species}&age=${req.body.age}&size=${req.body.size}&gender=${req.body.gender}`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const petData = formatPetData(matches.animals);
    res.json(petData);

}

async function getAllCats(req, res) {
    const token = await getToken();
    const results = await fetch(`${API_URL}?type=cat`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const catData = formatPetData(results.animals)
    res.json(catData);
}
async function getAllDogs(req, res) {
    const token = await getToken();
    const results = await fetch(`${API_URL}?type=dog`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const dogData = formatPetData(results.animals)
    res.json(dogData);
}
async function getCatDetail(req, res) {
    const token = await getToken();
    const results = await fetch(`${API_URL}?type=cat/`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then(res => res.json());
    const catData = formatPetData(results.animals)
    res.json(catData);
}
async function getDogDetail(req, res) {
    const token = await getToken();
    
    const results = await fetch(`${API_URL}?type=dog/`, {
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


