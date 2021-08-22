import React, { useEffect, useState } from "react";
import { GetProducts } from "../api/ProductService";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

function ProductList() {
  const token = useSelector((state) => state.user.token);
  const searchFilter = useSelector((state) => state.search.value);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await GetProducts(token);
      if (!response.error) setProducts(response.data);
      setLoading(false);
    }
    fetchData();
  }, [token]);
  return (
    <ProductListWrapper>
      {loading ? (
        <div className="loading">
          <CircularProgress variant="indeterminate" />
        </div>
      ) : (
        products.map((product) => {
          if (product.name.includes(searchFilter)) return <ProductCard product={product} key={product.id} />;
          else return null;
        })
      )}
    </ProductListWrapper>
  );
}

export default ProductList;

const ProductListWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  left: 0;
  flex-wrap: wrap;

  .loading {
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width:800px){
    justify-content: center;
  }
`;
