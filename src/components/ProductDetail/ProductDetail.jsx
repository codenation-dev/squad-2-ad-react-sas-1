import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../services/products';
import {
  setProductDetail,
  getProductsRequest,
  addItem,
} from '../../actions/products';
import Loading from '../Loading/';
import { urlParser } from '../../modules/urlParser';

import './ProductDetail.scss';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.products.product);
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);

  const [selectedSize, setSelectedSize] = useState('');

  const handleGetProducts = () => {
    getProducts().then((data) => dispatch(getProductsRequest(data)));
  };

  const handleAddItem = ({ sku, size }) =>
    dispatch(addItem({ sku, size, selectedProduct }));

  const handleSetSize = (size) => setSelectedSize(size);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    if (products.length > 0) {
      const message = urlParser();

      dispatch(setProductDetail(message));
    } else {
      handleGetProducts();
    }
  }, [products, selectedProduct, window.location.pathname]);

  {
    /* console.log(selectedProduct); */
  }

  if (!Object.keys(selectedProduct).length) {
    return <Loading />;
  }

  {
    /* console.log(selectedSize); */
  }

  return (
    <div className="product">
      <div className="product__body">
        <div className="product__image">
          <img src={selectedProduct.image} alt="nome do produto" />
        </div>

        <div className="product__details">
          <div className="product__price">
            <span className="product__price__price">
              {selectedProduct.actual_price}
            </span>
            {selectedProduct.actual_price !== selectedProduct.regular_price && (
              <span className="product__price__discount">
                {selectedProduct.regular_price}
              </span>
            )}
          </div>

          <div className="product__desc">
            <p>{selectedProduct.name}</p>
          </div>

          <div className="product__size">
            {selectedProduct.sizes &&
              selectedProduct.sizes
                .filter(({ available }) => available)
                .map((item) => (
                  <span
                    key={item.sku}
                    sku={item.sku}
                    onClick={() => handleSetSize(item)}
                    className={` ${
                      item.sku === selectedSize.sku ? 'is-active' : ''
                    }`}
                  >
                    {item.size}
                  </span>
                ))}
          </div>

          <div className="add__cart">
            <button
              className="btn__cart"
              onClick={() => handleAddItem(selectedSize)}
            >
              adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
