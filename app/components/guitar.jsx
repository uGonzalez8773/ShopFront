import { Link } from "@remix-run/react";

function Guitar({ guitar }) {
  const { name, description, price, url, image } = guitar;
  const dynamicUrl = `/guitars/${url}`;

  return (
    <div className="guitar">
      <img
        src={image.data.attributes.formats.medium.url}
        alt={`guitar ${name}`}
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>

        <Link className="link" to={dynamicUrl}>
          Buy Guitar
        </Link>
      </div>
    </div>
  );
}

export default Guitar;
