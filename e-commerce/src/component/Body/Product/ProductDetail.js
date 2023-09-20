import { Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./ListProduct.css";

function ProductDetail({ product }) {
  return (
    <li key={product.id} className="col l-3 product-item">
                <div className="product-item__img">
                  <img src={product.image} alt="name" />
                </div>
                <div className="product-item__info">
                  <p className="product-category">
                    {product.category_lv10}
                  </p>
                  <h1>
                    <span className="product-highlight">{product.name}</span>
                  </h1>

                  <p className="product-description">{product.description}</p>

                  <p>
                    <span className="primary-text">$</span>
                    <strong>{product.price}</strong>
                    <span className="primary-text product-rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#e2a400"
                          fillRule="evenodd"
                          d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                        ></path>
                      </svg>
                      {product.rating}
                    </span>
                  </p>
                </div>
              </li>
  )
}

export default ProductDetail