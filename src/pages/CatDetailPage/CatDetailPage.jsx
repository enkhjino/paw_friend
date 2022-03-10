import { useParams } from "react-router-dom";

export default function CatDetailPage({ cats }) {
  let { catName } = useParams();

  let cat = cats.find((c) => c.name=== catName);

  return (
    <div className="flex">
      <div>
        <h1>{cat.name}</h1>
        <h3>{cat.breed}</h3>
        <h3>{cat.age} | {cat.gender} | {cat.size}</h3>
        <h1>ABOUT</h1>
        <h3>SPAYED/NEUTERED: {cat.spayedNeutered ? 'Yes' : 'No'}</h3>
        <h3>HEALTH: if(cats.shotsCurrent) </h3>
        <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', wordWrap: 'break-word'}}>{cat.description}</p>
        <h4>Posted Since: {new Date(cat.publishedAt).toLocaleDateString()}</h4>
    </div>
    </div>
  );
}



