import ProductCardWrapper from "../styled/ProductCardWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/shoppingCart";
import productImage from "../static/images/defaultproduct.png";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const isProductInCart = shoppingCart.items.find((item) => item.id === product.id);

  const handleAdd = () => {
    dispatch(addItem(product));
  };
  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <ProductCardWrapper>
      <div>
        <div>
          <h3>{product.name}</h3>
          <p>{product.category ? product.category.name : ""}</p>
        </div>
      </div>
      <div>
        <img alt={product.name} src={product.imageUrl ? product.imageUrl : productImage}></img>
      </div>
      <div>
        {(product.category && product.category.rewardAmount) > 0 && (
          <p className="reward">{product.category.rewardAmount.toFixed(2) + " ₺ Hediye 🎁"}</p>
        )}
        <p className="price">{"Fiyat: " + product.price.toFixed(2) + " ₺"}</p>
      </div>
      <div>
        {isProductInCart ? (
          <div className="cart-btn red" onClick={handleRemove}>
            Sepetten Çıkar <i className="fas fa-trash fa-lg" />
          </div>
        ) : (
          <div className="green cart-btn" onClick={handleAdd}>
            Sepete Ekle <i className="fas fa-cart-plus fa-lg" />
          </div>
        )}
      </div>
    </ProductCardWrapper>
  );
}

export default ProductCard;
