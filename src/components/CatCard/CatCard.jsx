import { Link } from "react-router-dom";

export default function CatCard(props) {
  return (
    <>
      <Link to={`/cats/${props.cat.name}`} className="cat-link">
        <div
          style={{
            background: `url(${props.cat.photos}) no-repeat center center`,
            backgroundSize: "cover",
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{props.cat.name}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}