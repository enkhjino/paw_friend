import { useParams } from "react-router-dom";

export default function CatDetailPage({ cats }) {
  let { catName } = useParams();

  let cat = cats.find((c) => c.title === catName);

  return (
    <div className="flex">
      <div>
        <h1>{cat.name}</h1>
        <h3>{cat.breed}</h3>
        <h3>{cat.age}| {cat.gender} | {cat.size}</h3>
        <h1>ABOUT</h1>
        <h3>SPAYED/NEUTERED: {cat.spayedNeutered}</h3>
        <h3>HEALTH: if(cats.shotsCurrent) </h3>
        <h3>{cat.description}</h3>
        <h4>Posted Since: {new Date(cat.publishedAt).toLocaleDateString()}</h4>
    </div>
    </div>
  );




{/* apiId: a.id,
spayedNeutered: a.attributes.spayed_neutered,
houseTrained: a.attributes.house_trained,
shotsCurrent: a.attributes.shots_current,
children: a.environment.children,
cat: a.environment.cat,
dog: a.environment.dog,
photos: a.photos.map(p => p.full),
status: a.status,
publishedAt: a.published_at,
emailContact: a.contact.email,
phoneContact: a.contact.phone,
addressContact: a.contact.address.address1,
cityAddressContact: a.contact.address.city,
stateAddressContact: a.contact.address.state,
postcodeAddressContact: a.contact.address.postcode,
countryAddressContact: a.contact.address.country */}