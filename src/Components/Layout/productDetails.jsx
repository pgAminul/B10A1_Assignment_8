import React, { useEffect, useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "../../App.css";
import { Helmet } from "react-helmet";
import { CartContext } from "../ContextApi/Context"; // Correct import

function DetailsBook() {
  const { details } = useParams();
  const id = parseInt(details);

  const loaderData = useLoaderData();
  const newData = loaderData.find(
    (product) => parseInt(product.product_id) === id
  );
  const { addToCart, addToWishList } = useContext(CartContext);

  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = newData;

  const [addCart, setAddCart] = useState(false);
  const handleAddToCart = () => {
    addToCart(newData);
    setAddCart(true);
  };
  const [isActive, setActive] = useState(false);
  const handleWiseList = () => {
    setActive(true);
    addToWishList(newData);
  };

  return (
    <div>
      <Helmet>
        <title>Product Details</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="lg:h-[110vh] h-[1200px]">
        <div className="productDetails text-center relative">
          <h2 className="font-bold text-white text-3xl py-4">
            Product Details
          </h2>
          <p className="text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="card lg:card-side md:left-32 lg:left-60 bg-base-100 shadow-xl mx-auto mt-10 max-w-4xl absolute top-[200px] md:top-[150px]">
          <figure className="w-full lg:w-1/2">
            <img
              className="h-full object-cover rounded-l-lg"
              src={product_image}
              alt={product_title}
            />
          </figure>
          <div className="card-body w-full lg:w-1/2 p-6">
            <h2 className="card-title text-3xl font-bold">{product_title}</h2>
            <p className="text-lg font-semibold text-green-600">
              Price: ${price}
            </p>
            <p
              className={`badge ${
                availability ? "badge-success" : "badge-error"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </p>
            <p className="mt-2">{description}</p>
            {Specification && (
              <div className="mt-4">
                <h3 className="font-bold">Specification:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-4 flex items-center gap-4">
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name="rating"
                    className={`mask mask-star-2 ${
                      i < rating ? "bg-green-500" : "bg-gray-300"
                    }`}
                    disabled
                  />
                ))}
              </div>
              <span className="text-lg font-bold">{rating}</span>
            </div>
            <div className="card-actions justify-between mt-6">
              <button
                className="btn btn-primary"
                disabled={addCart}
                onClick={handleAddToCart}
              >
                Add to Cart <i className="fa-solid fa-cart-shopping ml-2"></i>
              </button>
              <button
                className="btn btn-outline"
                disabled={isActive}
                onClick={handleWiseList}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsBook;
