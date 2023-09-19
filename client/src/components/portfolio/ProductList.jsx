import "./productList.css";
import Product from "./Product";
import { products } from ".//data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">PROJECTS</h1>
        <p className="pl-desc">
        Create & inspire. It's Sachin
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;