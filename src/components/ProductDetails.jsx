import productImage from "../static/images/defaultproduct.png";
import { removeItem } from "../redux/shoppingCart";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };
  return (
    <tr key={product.id}>
      <td>
        <img alt={product.name} src={product.imageUrl ? product.imageUrl : productImage}></img>
      </td>
      <td>{product.name}</td>
      <td>
        Fiyat: <mark>{product.price.toFixed(2) + " ₺"}</mark>
      </td>
      <td>
        {"KazandiRio puan: "}
        <mark>{product.category?.rewardAmount ? product.category.rewardAmount.toFixed(2) : 0}</mark>
        <mark> ₺</mark>
      </td>
      <td>
        <Button className="update" onClick={handleRemove}>
         Sepetten çıkar <i className="fas fa-trash fa-lg" />
        </Button>
      </td>
    </tr>
  );
}

export default ProductDetails;
