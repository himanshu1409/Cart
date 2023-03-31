import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { price: 5000, title: "Watch", qty: 1, img: "", id: 1 },
        { price: 15000, title: "Mobile Phone", qty: 10, img: "", id: 2 },
        { price: 90000, title: "Laptop", qty: 4, img: "", id: 3 },
      ],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItem qty={1} price={99} title={"Watch"} img={""} /> */}
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
        {/* <CartItem /> */}
        {/* <CartItem /> */}
      </div>
    );
  }
}

export default Cart;
