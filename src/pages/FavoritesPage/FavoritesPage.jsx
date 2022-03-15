import * as petsAPI from '../../utilities/pets-api'
import { useState, useEffect } from "react";
import CatCard from "../../components/CatCard/CatCard";
import DogCard from "../../components/DogCard/DogCard";


export default function FavoritesPage({setCats, setDogs, setFavorites}) {

  const [pets, setPets] = useState([]) 
  //const favoritedPets = pet.find(p=>p.photos.length).includes(req.user.apiId);
  useEffect(function () {
    async function getAllFavs() {
      const getAllFavs = await petsAPI.getFaves();
      setPets(getAllFavs);
      setCats(getAllFavs);
      setDogs(getAllFavs);
      setFavorites(getAllFavs);
    }
    getAllFavs();
  }, []);
  
    return (
      <main className="container">
      {pets.length > 0 && pets.map(m => (
     m.species === "Cat" ? <CatCard key={m.apiId} cat={m}/> : <DogCard key={m.apiId} dog={m}/>
   ))}
   </main>
    );
  }