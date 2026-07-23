import React, { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
  constructor(props) {
    super(props);

    let mycart = [];
    try {
      mycart = JSON.parse(localStorage.getItem('customer_cart')) || [];
    } catch (e) {
      mycart = [];
    }

    let customer = null;
    try {
      customer = JSON.parse(localStorage.getItem('customer_info')) || null;
    } catch (e) {
      customer = null;
    }

    this.state = {
      // variables — restore from localStorage so refreshing the page
      // doesn't silently log the customer out or wipe their cart
      token: localStorage.getItem('customer_token') || "",
      customer: customer,
      mycart: mycart,
      // functions
      setToken: this.setToken,
      setCustomer: this.setCustomer,
      setMycart: this.setMycart,
    };
  }

  setToken = (value) => {
    if (value) {
      localStorage.setItem('customer_token', value);
    } else {
      localStorage.removeItem('customer_token');
    }
    this.setState({ token: value });
  };

  setCustomer = (value) => {
    if (value) {
      localStorage.setItem('customer_info', JSON.stringify(value));
    } else {
      localStorage.removeItem('customer_info');
    }
    this.setState({ customer: value });
  };

  setMycart = (value) => {
    localStorage.setItem('customer_cart', JSON.stringify(value || []));
    this.setState({ mycart: value });
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
