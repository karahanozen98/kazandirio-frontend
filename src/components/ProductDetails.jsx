import productImage from "../static/images/defaultproduct.png";
import { removeItem } from "../redux/shoppingCart";
import { useDispatch } from "react-redux";

function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };
  return (
    <div className="product-info" key={product.id}>
      <img className="product-image" alt={product.name} src={product.imageUrl ? product.imageUrl : productImage}></img>
      <h3>{product.name}</h3>
      <p>
        Fiyat: <mark>{product.price.toFixed(2) + " TL"}</mark>
      </p>
      <p>
        {"Kazanılacak puan:"}
        <mark>{product.category?.rewardAmount ? product.category.rewardAmount.toFixed(2) : 0}</mark>
        <mark> TL</mark>
      </p>
      <div className="cart-btn red" onClick={handleRemove}>
        Sepetten Çıkar <i className="fas fa-trash fa-lg" />
      </div>
    </div>
  );
}

export default ProductDetails;
