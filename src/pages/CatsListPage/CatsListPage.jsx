import * as petsAPI from '../../utilities/pets-api';
import "./CatsListPage.css";
import CatCard from "../../components/CatCard/CatCard";

export default function CatsListPage({cats, setCats}) {
  return (
    <div className="container">
      {cats && cats.map((cat) => {
        if (cat.photos.length)
        return <CatCard key={cat.name} cat={cat} />;
      })}
    </div>
  );
}



