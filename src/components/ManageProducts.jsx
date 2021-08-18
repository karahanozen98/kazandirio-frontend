import React from "react";
import { TextField, Button, FormHelperText, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Open, severities } from "../redux/toast";
import { GetCategories } from "../api/CategorySevice";
import { CreateProduct } from "../api/ProductService";
import { useEffect } from "react";
import AdminPanelWrapper from "../styled/AdminPanelWrapper";

function ManageProducts() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetCategories(token);
      if (!response.error) setCategories(response.data);
      else dispatch(Open({ message: "Kategorilere ulaşılamadı", severity: severities.warning }));
    };
    fetchData();
  }, [dispatch,token]);

  const handleSubmit = async () => {
    if (!name) {
      dispatch(Open({ message: "Kategori ismi boş bırakılamaz", severity: severities.warning }));
      return;
    }
    if (price < 0) {
      dispatch(Open({ message: "Hediye puanı sıfırdan küçük olamaz", severity: severities.warning }));
      return;
    }

    const response = await CreateProduct(token, { name, price, categoryId, imageUrl });
    if (!response.error) {
      dispatch(Open({ message: "Ürün oluşturuldu", severity: severities.success }));
      setName("");
      setPrice(0);
      setCategoryId(0);
    } else dispatch(Open({ message: response.data, severity: severities.error }));
  };

  return (
    <AdminPanelWrapper>
      <h2>Yeni Ürün Oluştur</h2>
      <form>
        <section>
          <FormHelperText>Ürün Adı</FormHelperText>
          <TextField value={name} placeholder="Ürün Adı" onChange={(e) => setName(e.target.value)}></TextField>
        </section>
        <section>
          <FormHelperText>Ürün Fiyatı (TL)</FormHelperText>
          <TextField
            value={price}
            type="number"
            InputProps={{
              inputProps: {
                min: 0,
                step: 0.01,
              },
            }}
            onChange={(e) => setPrice(e.target.value)}
          ></TextField>
        </section>
        <section>
          <FormHelperText>Görsel Url'sini yapıştır</FormHelperText>
          <TextField placeholder="Ürün Görseli" onChange={(e) => setImageUrl(e.target.value)} />
        </section>

        <section>
          <FormHelperText>Kategori Seçimi Yapın</FormHelperText>
          <Select style={{ width: "100%" }} value={0} onChange={(e) => setCategoryId(e.target.value)}>
            <MenuItem value={0}>{"   Kategori Yok   "}</MenuItem>
            {categories.map((category) => {
              return (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </section>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Kaydet
        </Button>
      </form>
    </AdminPanelWrapper>
  );
}
export default ManageProducts;
