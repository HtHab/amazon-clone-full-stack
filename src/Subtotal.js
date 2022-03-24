import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ basket, totalPrice }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <p>
        {`Subtotal (${basket.length} items): `}
        <strong>${parseFloat(totalPrice).toFixed(2)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> <p>This order contains a gift</p>
      </small>
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
