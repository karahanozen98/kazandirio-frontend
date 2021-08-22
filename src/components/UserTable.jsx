import React from "react";
import { Button } from "@material-ui/core";

function UserDetails({ user, editingUser, setEditingUser, handleSave }) {
  return (
    <tr>
      <td>{user.username}</td>
      <td>
        {editingUser.id !== user.id ? (
          user.role
        ) : (
          <select value={editingUser.role} onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}>
            <option value={"Consumer"}>Consumer</option>
            <option value={"Admin"}>Admin</option>
          </select>
        )}
      </td>
      <td>
        {editingUser.id !== user.id ? (
          user.balance + " ₺"
        ) : (
          <input
            type="number"
            min="0"
            value={editingUser.balance}
            onChange={(e) => setEditingUser({ ...editingUser, balance: e.target.value })}
          ></input>
        )}
      </td>
      <td>
        {editingUser.id !== user.id ? (
          user.rewards + " ₺"
        ) : (
          <input
            type="number"
            min="0"
            value={editingUser.rewards}
            onChange={(e) => setEditingUser({ ...editingUser, rewards: e.target.value })}
          ></input>
        )}
      </td>
      <td>
        {editingUser.id !== user.id ? (
          <React.Fragment>
            <Button className="update" onClick={() => setEditingUser(user)}>
              Düzenle<i className="fa fa-edit"></i>
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button className="save" onClick={handleSave}>
              Kaydet<i className="fa fa-save"></i>
            </Button>
            <Button
              className="exit"
              onClick={() =>
                setEditingUser({
                  id: null,
                  username: null,
                  role: null,
                  balance: null,
                  rewards: null,
                })
              }
            >
              Vazgeç
              <i className="fa fa-undo"></i>
            </Button>
          </React.Fragment>
        )}
      </td>
    </tr>
  );
}
export default UserDetails;
