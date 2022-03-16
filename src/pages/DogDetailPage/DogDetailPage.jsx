import { useParams } from "react-router-dom";
import {useState} from 'react';
export default function DogDetailPage({user, dogs, favorites, addFavorites, removeFavorites }) {
  let { dogName } = useParams();
  const [color, setColor] = useState("heart-image");
  let dog = dogs.find((d) => d.name=== dogName);
  let fave = favorites.filter(f => f._id === dog._id);
  function clicked(dog){
    addFavorites(dog);
    setColor("heart-image-faved");
  }
  return (
    <div className="flex">
      <div className="details-container">
        <div>
          <h1>{dog.name.toUpperCase()}</h1>
          <img className="petDetail" src={dog.photos}></img>
          { user !== null ?
            <>
            {
              fave.length ? 
              
                <button className="heart-image-faved" onClick={()=> removeFavorites(dog)} ><img src="https://i.imgur.com/LtmgnrK.png" alt="" /></button>
               
              : 
              
                <button className={color} onClick={()=> clicked(dog)}><img src="https://i.imgur.com/LtmgnrK.png"/></button>
              
            }
            </>
            :
            <></>
          }
        </div>
        <div className="about">
          <h3>{dog.breed}</h3>
          <h3>{dog.age} | {dog.gender} | {dog.size}</h3>
          <h1>About</h1>
          <h3>SPAYED/NEUTERED: {dog.spayedNeutered ? 'Yes' : 'No'}</h3>
          <h3>HEALTH: {dogs.shotsCurrent ? 'Vaccinations up to date': 'Need vaccinations'} </h3>
          <h2> PREFERS A HOME </h2>
            <h3>{dog.dog ? 'with other cats' : 'without other cats'}</h3>
            <h3>{dog.dog ? 'with other dogs' : 'without other dogs'}</h3>
            <h3>{dog.children ? 'with other kids' : 'without kids'}</h3>
          <h1>Meet {dog.name}</h1>
          <p>{dog.description}</p>
          <h2>Considering {dog.name} for adoption?</h2>
          <p>Location: {dog.addressContact} {dog.cityAddressContact, dog.stateAddressContact, dog.postcodeAddressContact, dog.countryAddressContact}</p>
          <p>{dog.emailContact}</p>
          <p>{dog.phoneContact}</p>
          <h3>{dog.adoptable}</h3>
          <h4>Posted Since: {new Date(dog.publishedAt).toLocaleDateString()}</h4>
        </div>
    </div>
    </div>
  );
}