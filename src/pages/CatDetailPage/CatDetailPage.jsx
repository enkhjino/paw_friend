import { useParams } from "react-router-dom";

export default function CatDetailPage({ cats }) {
  let { catName } = useParams();

  let cat = cats.find((c) => c.name=== catName);

  return (
    <div className="flex">
      <div>
        <img src={cat.photos}></img>
        <h1>{cat.name}</h1>
        <h3>{cat.breed}</h3>
        <h3>{cat.age} | {cat.gender} | {cat.size}</h3>
        <h1>About</h1>
        <h3>DECLAWED: {cat.declawed ? 'Yes' : 'No'}</h3>
        <h3>SPAYED/NEUTERED: {cat.spayedNeutered ? 'Yes' : 'No'}</h3>
        <h3>HEALTH: {cats.shotsCurrent ? 'Vaccinations up to date': 'Need vaccinations'} </h3>
        <h2> PREFERS A HOME </h2>
          <h3>{cat.cat ? 'with other cats' : 'without other cats'}</h3>
          <h3>{cat.dog ? 'with other dogs' : 'without other dogs'}</h3>
          <h3>{cat.children ? 'with other kids' : 'without kids'}</h3>
        <h1>Meet {cat.name}</h1>
        <h3>{cat.description}</h3>
        <h2>Considering {cat.name} for adoption?</h2>
        <p>Location: {cat.addressContact} {cat.cityAddressContact, cat.stateAddressContact, cat.postcodeAddressContact, cat.countryAddressContact}</p>
        <p>{cat.emailContact}</p>
        <p>{cat.phoneContact}</p>
        <h3>{cat.adoptable}</h3>
        <h4>Posted Since: {new Date(cat.publishedAt).toLocaleDateString()}</h4>
    </div>
    </div>
  );
}




