import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../services/products';
import { setProductDetail } from '../../actions/products';
import { getProductsRequest } from '../../actions/products';
import Loading from '../Loading/';
import { urlParser } from '../../modules/urlParser';

import './ProductDetail.scss';

const ProductDetail = () => {
  const selectedProduct = useSelector((state) => state.products.product);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleGetProducts = () => {
    getProducts().then((data) => dispatch(getProductsRequest(data)));
  };

  useEffect(() => {
    if (products.length > 0) {
      const message = urlParser();

      dispatch(setProductDetail(message));
    } else {
      handleGetProducts();
    }
  }, [products, selectedProduct]);

  // if (!Object.keys(selectedProduct).length) {
  //   return <Loading />;
  // }

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
            <span>P</span>
            <span className="active">M</span>
            <span>G</span>
          </div>

          <div className="product__quantity">
            <input className="quantity" type="number"></input>
          </div>

          <div className="add__cart">
            <button className="btn__cart">comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
