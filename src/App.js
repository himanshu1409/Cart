import React from "react";
// import { render } from "@testing-library/react";
import "./App.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase/app";
import "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  // componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then((snapshot) => {
  //       // console.log(snapshot);
  //       snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       });

  //       const products = snapshot.docs.map((doc) => {
  //         return doc.data();
  //       });

  //       this.setState({ products, loading: false });
  //     });
  // }

  componentDidMount() {
    this.db.collection("products").onSnapshot((snapshot) => {
      // console.log(snapshot);
      let products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        // console.log(data.id);
        return data;
      });

      // const products = snapshot.docs.map((doc) => {
      //   return doc.data();
      // });

      this.setState({ products, loading: false });
    });
  }

  handleIncreaseQuantity = (product) => {
    // console.log("Hey please increase the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products, //products: products,
    // });
    // console.log(this.state);
    const docRef = this.db.collection("products").doc(products[index].id);
    // console.log(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("Updated Successfully");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("Hey please decrease the qty of", product);
    if (product.qty === 0) {
      return;
    }
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty -= 1;
    // this.setState({
    //   products, //products: products,
    // });

    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log("Updated Successfully");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  handleDeleteProduct = (id) => {
    // console.log(id)
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id); //[{}]
    // this.setState({
    //   products: items,
    // });

    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Deleted Successfully");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty * product.price;
    });
    return total;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({ img: "", price: 900, qty: 3, title: "Washing machine" })
      .then((docRef) => {
        console.log("Product has been added", docRef);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a Product
        </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Components</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
