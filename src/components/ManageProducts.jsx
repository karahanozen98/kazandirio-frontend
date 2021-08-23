import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Open, severities } from "../redux/toast";
import { DeleteProduct, GetProducts, UpdateProduct } from "../api/ProductService";
import { useEffect } from "react";
import TableWrapper from "../styled/TableWrapper";
import CreateNewProduct from "./CreateNewProduct";
import ProductTable from "./ProductTable";

const initialProduct = { id: null, name: null, price: null, imageUrl: null, categoryId: null };

function ManageProducts() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const searchFilter = useSelector((state) => state.search.value);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(initialProduct);
  const [trigger, setTrigger] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetProducts(token);
      if (!response.error) setProducts(response.data);
      else dispatch(Open({ message: response.data, severity: severities.error }));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, token, trigger]);

  const handleSave = async () => {
    const newProduct = {
      id: editingProduct.id,
      name: editingProduct.name,
      price: +editingProduct.price,
      categoryId: editingProduct.categoryId,
      imageUrl: editingProduct.imageUrl,
    };
    const response = await UpdateProduct(newProduct);
    if (!response.error) {
      dispatch(Open({ message: "Ürün başarıyla güncellendi", severity: severities.success }));
      setTrigger(Math.random());
    } else dispatch(Open({ message: response.data, severity: severities.error }));
    setEditingProduct(initialProduct);
  };

  const handleDelete = async (productId) => {
    const response = await DeleteProduct(productId);
    if (!response.error) {
      dispatch(Open({ message: "Ürün başarıyla silindi", severity: severities.success }));
      setTrigger(Math.random());
    } else {
      dispatch(Open({ message: response.data, severity: severities.error }));
    }
  };

  return (
    <div>
      <CreateNewProduct />
      {loading ? (
        <h1>Ürünler Yükleniyor</h1>
      ) : (
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Ürün adı</th>
                <th>Fiyat</th>
                <th>Ürün Görseli</th>
                <th>Kategori Bilgisi</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                if (product.name.includes(searchFilter))
                  return (
                    <ProductTable
                      key={product.id}
                      product={product}
                      editingProduct={editingProduct}
                      setEditingProduct={setEditingProduct}
                      handleSave={handleSave}
                      handleDelete={handleDelete}
                    />
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
export default ManageProducts;
