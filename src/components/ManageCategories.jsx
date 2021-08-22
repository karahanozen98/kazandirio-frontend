import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Open, severities } from "../redux/toast";
import { GetCategories } from "../api/CategorySevice";
import { useEffect } from "react";
import TableWrapper from "../styled/TableWrapper";
import CreateNewCategory from "./CreateNewCategory";

function ManageProducts() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const searchFilter = useSelector((state) => state.search.value);
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line
  const [editingCategory, setEditingCategory] = useState({ id: null, name: null, rewardAmount: null });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetCategories(token);
      if (!response.error) setCategories(response.data);
      else dispatch(Open({ message: response.data, severity: severities.error }));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, token]);

  return (
    <div>
      <CreateNewCategory />
      {loading ? (
        <h1>Kategoriler Yükleniyor</h1>
      ) : (
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Kategori adı</th>
                <th>KazandiRio Puanı</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                if (category.name.includes(searchFilter))
                  return (
                    <tr key={category.id}>
                      <td>{editingCategory.id !== category.id ? category.name : <input value={editingCategory.name}></input>}</td>
                      <td>
                        {editingCategory.id !== category.id ? (
                          category.rewardAmount + " ₺"
                        ) : (
                          <input type="number" min="0" value={editingCategory.rewardAmount}></input>
                        )}
                      </td>
                    </tr>
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
