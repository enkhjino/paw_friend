import { useParams } from "react-router-dom";

export default function DogDetailPage({ dogs, favorites, addFavorites, removeFavorites }) {
  let { dogName } = useParams();

  let dog = dogs.find((d) => d.name=== dogName);
  let fave = favorites.filter(f => f._id === dog._id);
  return (
    <div className="flex">
      <div>
        <img src={dog.photos}></img>
        <h1>{dog.name}</h1>
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
        {
          fave.length ? 
          <div className="heart">
            <button className="heart-image-faved" onClick={()=> removeFavorites(dog)} src=" " width="70vmin" height="70vmin"></button>
          </div> 
          : 
          <div className="heart">
            <button className="heart-image" onClick={()=> addFavorites(dog)} src="https://i.imgur.com/DzXO8gW.png" width="70vmin" height="70vmin"/>
          </div>
        }
    </div>
    </div>
  );
}