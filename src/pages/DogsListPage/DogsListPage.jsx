
import * as petsAPI from '../../utilities/pets-api';
import "./DogsListPage.css";
import DogCard from "../../components/DogCard/DogCard";
import { useState, useEffect } from 'react';

export default function DogsListPage({dogs, setDogs}) {
  // const [dogs, setDogs] = useState([]);

  // useEffect(function () {
  //   async function getDogs() {
  //     const dogs = await petsAPI.getAllDogs()
  //     setDogs(dogs);
  //   }
  //   getDogs();
  // }, []);
 
  return (
    <div className="container">
      {dogs && dogs.map((dog) => {
        if (dog.photos.length)
        return <DogCard key={dog.name} dog={dog} />;
      })}
    </div>
  );
}


