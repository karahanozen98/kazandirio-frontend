import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GetPreviousOrders } from "../api/OrderService";
import TableWrapper from "../styled/TableWrapper";
import defaultProduct from "../static/images/defaultproduct.png";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { CircularProgress } from "@material-ui/core";

function PreviousOrders() {
  const user = useSelector((state) => state.user);
  const searchQuery = useSelector((state) => state.search.value);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetPreviousOrders(user.token, user.id);
      if (!response.error) setProducts(response.data);
      setLoading(false);
    };
    fetchData();
  }, [user]);
  return (
    <div>
      <Navbar />
      {loading ? (
        <LoadingWrapper>
          <CircularProgress variant="indeterminate" />
        </LoadingWrapper>
      ) : (
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Ürün Görseli</th>
                <th>Ürün Adı</th>
                <th>Fiyat</th>
                <th>KazandiRio Puan</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                if (product.name.includes(searchQuery))
                  return (
                    <OrderTable>
                      <td>
                        <img alt={product.name} src={product.imageUrl ? product.imageUrl : defaultProduct}></img>
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price + " ₺"}</td>
                      <td>{product.category ? product.category.rewardAmount : 0} ₺</td>
                    </OrderTable>
                  );
                else return null;
              })}
            </tbody>
          </table>
        </TableWrapper>
      )}
    </div>
  );
}
export default PreviousOrders;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderTable = styled.tr`
  img {
    width: 50px;
    height: 50px;
  }
`;
