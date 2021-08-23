import React from "react";
import { TextField, Button, FormHelperText } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Open, severities } from "../redux/toast";
import AdminPanelWrapper from "../styled/AdminPanelWrapper";
import { CreateCategory } from "../api/CategorySevice";

function CreateNewCategory() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [rewardAmount, setRewardAmount] = useState(0);

  const handleSubmit = async () => {
    if (!name) {
      dispatch(Open({ message: "Kategori ismi boş bırakılamaz", severity: severities.warning }));
      return;
    }
    if (!rewardAmount && rewardAmount !== 0) {
      dispatch(Open({ message: "Hediye puanı giriniz.", severity: severities.warning }));
      return;
    }
    if (rewardAmount < 0) {
      dispatch(Open({ message: "Hediye puanı sıfırdan küçük olamaz.", severity: severities.warning }));
      return;
    }
    const response = await CreateCategory({ name, rewardAmount });
    if (!response.error) {
      dispatch(Open({ message: "İşlem başarılı", severity: severities.success }));
    } else dispatch(Open({ message: response.data, severity: severities.error }));
  };

  return (
    <AdminPanelWrapper>
      <h2>Yeni Kategori Oluştur</h2>
      <form>
        <section>
          <FormHelperText>Kategori Adı</FormHelperText>
          <TextField value={name} placeholder="Kategori Adı" onChange={(e) => setName(e.target.value)}></TextField>
        </section>
        <section>
          <FormHelperText>KazandiRio Hediye Puanı (TL)</FormHelperText>
          <TextField
            value={rewardAmount}
            type="number"
            InputProps={{
              inputProps: {
                min: 0,
                step: 0.01,
              },
            }}
            onChange={(e) => setRewardAmount(e.target.value)}
          ></TextField>
        </section>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Kaydet
        </Button>
      </form>
    </AdminPanelWrapper>
  );
}
export default CreateNewCategory;
