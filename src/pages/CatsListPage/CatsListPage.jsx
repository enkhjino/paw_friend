import * as petsAPI from '../../utilities/pets-api';
import { useEffect } from 'react';
import "./CatsListPage.css";
import CatCard from "../../components/CatCard/CatCard";

export default function CatsListPage({cats, setCats}) {   
  const catsWithPhoto = cats.filter(c => c.photos.length);
  useEffect(function () {
    async function getCats() {
      const cats = await petsAPI.getAllCats()
      setCats(cats);
    }
    getCats();
  }, []);
  return (
    <div className="container">
      {catsWithPhoto.map((cat, idx) => (
        <CatCard key={idx} cat={cat} />)         
      )}                                        
    </div>                                       
  );
}



