import React from "react";

const CartItem = (props) => {
  // increaseQuantity = () => {
  //   // this.state.qty += 1; Directly mutating state, never recommended
  //   // console.log(this.state);

  //   // setState form 1
  //   // this.setState(
  //   //   {
  //   //     qty: this.state.qty + 1,
  //   //   },
  //   //   () => {
  //   //     console.log(this.state);
  //   //   }
  //   // );
  //   // In an event handler no matter how many times you call the setState function
  //   // React will merge the multiple setState calls into one setState call,
  //   // so component is rendered only once. Only last call will be taken.
  //   // Merging of all setState calls into one shallow leap is called Batching.

  //   // setState form 2, shallow merging both - if prevState required, use this
  //   this.setState(
  //     (prevState) => {
  //       return {
  //         qty: prevState.qty + 1,
  //       };
  //     },
  //     () => {
  //       // console.log(this.state);
  //     }
  //   );
  // In this case if it is called multiple times then React will maintain a queue
  // and these callbacks will be passed into the queue. PrevState will be upto date
  // for the call of each callback
  // This setState call is asynchronous. So on console.log(setState), it will be updated
  // but previous call will be printed. To run it synchronously one can pass a callback
  // to the setState function
  // };

  // decreaseQuantity = () => {
  //   const { qty } = this.state;
  //   if (qty === 0) {
  //     return;
  //   }
  //   // this.state.qty -= 1; Directly mutating state, never recommended
  //   // console.log(this.state);

  //   // setState form 1
  //   // this.setState({
  //   //   qty: this.state.qty - 1,
  //   // });

  //   // setState form 2, shallow merging both - if prevState required, use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1,
  //     };
  //   });
  // };

  // setState calls are asynchronous in case of react event handlers. But in case of
  // AJAX calls and making promises, setState call is synchronous.
  // testing = () => {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 5000);
  //   });

  //   promise.then(() => {
  //     this.setState({ qty: this.state.qty + 1 });
  //     // this.setState({ qty: this.state.qty + 1 });
  //     // this.setState({ qty: this.state.qty + 1 });
  //     // if this is done then component will be rerendered thrice as it is a synchronous call.
  //     // Works similar to prevSate
  //     console.log("state", this.state);
  //   });
  // };

  // console.log(this.props);
  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} alt="" />
      </div>

      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty : {qty}</div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            // onClick={this.increaseQuantity.bind(this)}
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            // onClick={this.decreaseQuantity}
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
