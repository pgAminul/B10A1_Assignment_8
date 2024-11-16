import React from "react";

function DeshBoardCard({ c, handleRemoveFromWishlist }) {
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
  } = c;
  return (
    <div className="p-5 my-6 ">
      <div className="card h-48 card-side bg-base-100 shadow-xl">
        <figure>
          <img src={product_image} className="h-36" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className="">
            {" "}
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            {rating}
          </p>
          <p> ${price}</p>
          <div className="">
            <button
              className="btn btn-primary"
              onClick={() => handleRemoveFromWishlist(product_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeshBoardCard;
