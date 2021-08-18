import React, { useEffect, useState } from "react";
import { GetProducts } from "../api/ProductService";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function ProductList() {
  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    async function fetchData() {
      const response = await GetProducts(token);
      if (!response.error) setProducts(response.data);
    }
    fetchData();
  }, [token]);
  return (
    <ProductListWrapper>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </ProductListWrapper>
  );
}

export default ProductList;

const ProductListWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`;
