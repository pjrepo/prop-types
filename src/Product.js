import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default-image.jpeg";

const Product = (props) => {
  const { image, name, price } = props;

  const url = image && image.url;

  return (
    <React.Fragment>
      <article>
        <img src={url || defaultImage} alt={name || "deafult image"} />
        <h4>{name}</h4>
        <p>${price || 3.99}</p>
      </article>
    </React.Fragment>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
