import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";
import styles from "./Card.module.css";
import { useCart } from "../contexts/CartContext";

function Card({ data }) {
  const { id, image, title, price } = data;

  const [state, dispatch] = useCart();
  console.log(state);

  const clickHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
