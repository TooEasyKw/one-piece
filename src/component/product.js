import React from "react";

const Product = ({ imgSo, nameSo, priceSo }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
        height: "400px",
        textAlign: "center",
      }}
    >
      <div>
        <img
          src={imgSo}
          alt="Shop Image"
          style={{
            width: "200px",
            height: "300px",
          }}
        />
      </div>
      <div>
        <h1>{nameSo}</h1>
        <h5>{priceSo}</h5>
      </div>
    </div>
  );
};

export default Product;
