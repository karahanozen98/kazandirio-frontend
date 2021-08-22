import React from "react";
import { Button } from "@material-ui/core";

function ProductTable({ product, editingProduct, setEditingProduct, handleSave, handleDelete }) {
  return (
    <tr>
      <td>
        {editingProduct.id !== product.id ? (
          product.name
        ) : (
          <input value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}></input>
        )}
      </td>
      <td>
        {editingProduct.id !== product.id ? (
          product.price + " ₺"
        ) : (
          <input
            type="number"
            min="0"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
          ></input>
        )}
      </td>
      <td>
        {editingProduct.id !== product.id ? (
          product.imageUrl ? (
            product.imageUrl.substring(0, 30)
          ) : (
            "Ürün görseli yok"
          )
        ) : (
          <input value={editingProduct.imageUrl} onChange={(e) => setEditingProduct({ ...editingProduct, imageUrl: e.target.value })}></input>
        )}
      </td>
      <td>{product.category ? product.category.name : "Kategori yok"}</td>
      <td>
        {editingProduct.id !== product.id ? (
          <React.Fragment>
            <Button className="update" onClick={() => setEditingProduct(product)}>
              Düzenle<i className="fa fa-edit"></i>
            </Button>
            <Button className="delete" onClick={() => handleDelete(product.id)}>
              Sil<i className="fa fa-trash"></i>
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button className="save" onClick={handleSave}>
              Kaydet<i className="fa fa-save"></i>
            </Button>
            <Button className="exit" onClick={() => setEditingProduct({ id: null, name: null, price: null, imageUrl: null, categoryId: null })}>
              Vazgeç
              <i className="fa fa-undo"></i>
            </Button>
          </React.Fragment>
        )}
      </td>
    </tr>
  );
}
export default ProductTable;
