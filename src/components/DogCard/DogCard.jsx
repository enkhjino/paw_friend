import { Link } from "react-router-dom";

export default function DogCard(props) {
  return (
    <>
      <Link to={'/dog'} className="dog-link">
        <div
          style={{
            background: `url(${props.dog.photos}) no-repeat center center`,
            backgroundSize: "cover",
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{props.dog.name}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}