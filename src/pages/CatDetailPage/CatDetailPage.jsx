import { useParams } from "react-router-dom";
import {useState} from 'react';
import "./CatDetailPage.css";

export default function CatDetailPage({ user, cats, addFavorites, favorites, removeFavorites }) {
  let { catName } = useParams();
  const [color, setColor] = useState("heart-image");
  let cat = cats.find((c) => c.name=== catName);
  let fave = favorites.filter(f => f._id === cat._id);
  function clicked(cat){
    addFavorites(cat);
    setColor("heart-image-faved");
  }
  return (
    <div className="flex">
      <div className="details-container">
        <div>
          <h1>{cat.name.toUpperCase()}</h1>
          <img className="petDetail"src={cat.photos}></img>
          { user !== null ?
            <>
            {
              fave.length ? 
              
                <button className="heart-image-faved" onClick={()=> removeFavorites(cat)} ><img src="https://i.imgur.com/LtmgnrK.png" alt="" /></button>
               
              : 
              
                <button className={color} onClick={()=> clicked(cat)}><img src="https://i.imgur.com/LtmgnrK.png"/></button>
              
            }
            </>
            :
            <></>
          }
        </div>
        <div className="about">
          <h1>About</h1>
          <h3>{cat.breed}</h3>
          <p>{cat.age} | {cat.gender} | {cat.size}</p>
          <p>DECLAWED: {cat.declawed ? 'Yes' : 'No'}</p>
          <p>SPAYED/NEUTERED: {cat.spayedNeutered ? 'Yes' : 'No'}</p>
          <p>HEALTH: {cats.shotsCurrent ? 'Vaccinations up to date': 'Need vaccinations'} </p>
          <h2> PREFERS A HOME </h2>
            <p>{cat.cat ? 'with other cats' : 'without other cats'} | {cat.dog ? 'with other dogs' : 'without other dogs'} | {cat.children ? 'with other kids' : 'without kids'}</p>
          <h1>Meet {cat.name}</h1>
          <p>{cat.description}</p>
          <h2>Considering {cat.name} for adoption?</h2>
          <p>Location: {cat.addressContact} {cat.cityAddressContact, cat.stateAddressContact, cat.postcodeAddressContact, cat.countryAddressContact}</p>
          <p>{cat.emailContact}</p>
          <p>{cat.phoneContact}</p>
          <h3>{cat.adoptable}</h3>
          <h4>Posted Since: {new Date(cat.publishedAt).toLocaleDateString()}</h4>
        </div>
        
    </div>
    </div>
  );
}

