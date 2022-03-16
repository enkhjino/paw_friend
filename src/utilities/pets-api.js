import { getToken } from './users-service';
const BASE_URL = '/api/pets';

export function getFaves() {
  return sendRequest(`${BASE_URL}/favorites`);
}

export function addFavs(pet) {
  return sendRequest(`${BASE_URL}/favorites`, "POST", pet);
}
export function removeFavs(pet) {
  return sendRequest(`${BASE_URL}/unfavorite`, "POST", pet);
}

export function getAllCats() {
    return sendRequest(`${BASE_URL}/cats`);
  }
export function getAllDogs() {
  return sendRequest(`${BASE_URL}/dogs`);
}

export function getCatDetail(apiId) {
    return sendRequest(`${BASE_URL}/cats/${apiId}`);
  }
export function matches(formData) {
    return sendRequest(`${BASE_URL}/matches`, "POST", formData);
}

async function sendRequest(url, method = 'GET', payload = null) {
// Fetch accepts an options object as the 2nd argument
// used to include a data payload, set headers, etc. 
const options = { method };
if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
}
const token = getToken();
if (token) {
    // Ensure that the headers objects exists
    options.headers = options.headers || {};
    // Add the Authorization header
    // Prefacing the token with 'Bearer '
    options.headers.Authorization = `Bearer ${token}`;
}
const res = await fetch(url, options);
// res.ok will be false if the status code set to 4xx in the controller action
if (res.ok) return res.json();
throw new Error('Bad Request');
}