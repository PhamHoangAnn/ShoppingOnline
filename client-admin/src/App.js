import './App.css';
import React, { Component } from 'react';
import MyProvider from './contexts/MyProvider';
import MyContext from './contexts/MyContext';
import Login from './components/LoginComponent';
import Main from './components/MainComponent';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

// Only render the protected admin area (Main) once we actually have a token.
// Rendering Main alongside Login unconditionally was causing Main's data
// components (Product, Category, ...) to fetch with no token, get back an
// unexpected {success:false} response, and crash the whole app (blank page).
class AppContent extends Component {
  static contextType = MyContext;
  render() {
    return this.context.token ? <Main /> : <Login />;
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <AppContent />
          </ErrorBoundary>
        </BrowserRouter>
      </MyProvider>
    );
  }
}
export default App;
