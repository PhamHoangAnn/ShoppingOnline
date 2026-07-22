import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import Category from './CategoryComponent';
import Product from './ProductComponent';
import Order from './OrderComponent';
import Customer from './CustomerComponent';
class Main extends Component {
    static contextType = MyContext; // using this.context to access global state
    render() {
        return (
    <div className="body-admin">
         <Menu />
         <Routes>
            <Route path='/' element={<Navigate replace to='/admin/home' />} />
            <Route path='/admin' element={<Navigate replace to='/admin/home' />} />
            <Route path='/admin/home' element={<Home />} />
            <Route path='/admin/categories' element={<Category />} />
            <Route path='/admin/products' element={<Product />}/>
            <Route path='/admin/orders' element={<Order />}/>
            <Route path='/admin/customers' element={<Customer />}/>
            <Route path='*' element={<Navigate replace to='/admin/home' />} />
        </Routes>
    </div>
        );
    }
}
export default Main;