import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

function Gadegest() {
  const { category } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (category) {
      const filterData = [...data].filter((d) => d.category === category);
      setProduct(filterData);
    } else {
      setProduct(data);
    }
  }, [category, data]);

  return (
    <div>
      {product.length === 0 ? (
        <div className="flex justify-center items-center h-[300px]">
          <h1 className="text-bold text-3xl">
            OPPS! All Product <span className="text-red-600">Stock Out</span>
          </h1>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
          {product.map((p, i) => {
            const { product_id, product_title, product_image, rating, price } =
              p;
            return (
              <div className="card bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={product_image} className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title">{product_title}</h2>
                  <p>{price}</p>
                  <div className="card-actions">
                    <NavLink
                      to={`/productDetails/${product_id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Gadegest;
