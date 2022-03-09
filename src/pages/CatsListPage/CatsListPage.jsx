import * as petsAPI from '../../utilities/pets-api';
import "./CatsListPage.css";
import CatCard from "../../components/CatCard/CatCard";
import { useState, useEffect } from 'react';

export default function CatsListPage() {
  const [cats, setCats] = useState([]);

  useEffect(function () {
    async function getCats() {
      const cats = await petsAPI.getAllCats()
      setCats(cats);
    }
    getCats();
  }, []);
 
  return (
    <div className="container">
      {cats && cats.map((cat) => {
        if (cat.photos.length)
        return <CatCard key={cat.name} cat={cat} />;
      })}
    </div>
  );
}