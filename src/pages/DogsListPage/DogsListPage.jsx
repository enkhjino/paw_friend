
import * as petsAPI from '../../utilities/pets-api';
import "./DogsListPage.css";
import DogCard from "../../components/DogCard/DogCard";

export default function DogsListPage({dogs, setDogs}) {
  return (
    <div className="container">
      {dogs && dogs.map((dog) => {
        if (dog.photos.length)
        return <DogCard key={dog.name} dog={dog} />;
      })}
    </div>
  );
}


