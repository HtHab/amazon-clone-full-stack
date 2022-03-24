import moment from "moment";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order">
      <h1>order</h1>

      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mm:ss:a")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className="order__total">Order total: ${order.data.amount / 100}</h3>
    </div>
  );
}

export default Order;
