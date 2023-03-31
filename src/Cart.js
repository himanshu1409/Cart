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

  handleIncreaseQuantity = (product) => {
    // console.log("Hey please increase the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products, //products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("Hey please decrease the qty of", product);
    if (product.qty === 0) {
      return;
    }
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;
    this.setState({
      products, //products: products,
    });
  };

  handleDeleteProduct = (id) => {
    // console.log(id);
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); //[{}]
    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItem qty={1} price={99} title={"Watch"} img={""} /> */}
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
        {/* <CartItem /> */}
        {/* <CartItem /> */}
      </div>
    );
  }
}

export default Cart;
