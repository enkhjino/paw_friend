import { useEffect } from 'react';
import * as petsAPI from '../../utilities/pets-api';
import "./DogsListPage.css";
import DogCard from "../../components/DogCard/DogCard";

export default function DogsListPage({dogs, setDogs}) {   
  const dogsWithPhoto = dogs.filter(d => d.photos.length);
  useEffect(function () {
    async function getDogs() {
      const dogs = await petsAPI.getAllDogs()
      setDogs(dogs);
    }
    getDogs();
  }, []);
  return (
    <div className="container">
      {dogsWithPhoto.map((dog, idx) => (
        <DogCard key={idx} dog={dog} />)         
      )}                                        
    </div>                                       
  );
}


