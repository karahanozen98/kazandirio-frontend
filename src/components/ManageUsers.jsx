import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Open, severities } from "../redux/toast";
import { GetAllUsers, UpdateUser } from "../api/UserService";
import { useEffect } from "react";
import TableWrapper from "../styled/TableWrapper";
import UserTable from "./UserTable";

const initalUser = { id: null, username: null, role: null, balance: null, rewards: null };

function ManageUsers() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.user.token);
  const searchFilter = useSelector((state) => state.search.value);
  const [editingUser, setEditingUser] = useState(initalUser);
  const [trigger, setTrigger] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetAllUsers(token);
      if (!response.error) setUsers(response.data);
      else dispatch(Open({ message: response.data, severity: severities.error }));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, token, trigger]);

  const handleSave = async () => {
    const newUser = {
      id: editingUser.id,
      username: editingUser.username,
      role: editingUser.role,
      balance: +editingUser.balance,
      rewards: +editingUser.rewards,
    };
    const response = await UpdateUser(token, newUser);
    if (!response.error) {
      dispatch(Open({ message: response.data, severity: severities.success }));
      setTrigger(Math.random());
    } else {
      dispatch(Open({ message: response.data, severity: severities.error }));
    }
    setEditingUser(initalUser);
  };

  return (
    <div>
      {loading ? (
        <h1>Kullanıcılar Yükleniyor</h1>
      ) : (
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Kullanıcı Adı</th>
                <th>Rol</th>
                <th>Bakiye</th>
                <th>Hediye puanları</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                if (user.username.includes(searchFilter))
                  return <UserTable key={user.id} user={user} editingUser={editingUser} setEditingUser={setEditingUser} handleSave={handleSave} />;
                else return null;
              })}
            </tbody>
          </table>
        </TableWrapper>
      )}
    </div>
  );
}
export default ManageUsers;
