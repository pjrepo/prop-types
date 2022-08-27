import React from "react";
import Product from "./Product";
import { useFetch } from "./custom-hooks/useFetch";

const url = "https://course-api.com/react-prop-types-example";

const App = () => {
  const { products } = useFetch(url);
  return (
    <React.Fragment>
      <h1>Products</h1>
      <section>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default App;
