import React, { Component } from 'react';

// Prevents the whole app from going blank-white when a component throws.
// Without this, any uncaught render error unmounts the entire React tree.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Admin app crashed:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="align-center text-center">
          <h2>Something went wrong.</h2>
          <p>Please try logging in again.</p>
          <button
            className="link"
            onClick={() => {
              localStorage.removeItem('admin_token');
              localStorage.removeItem('admin_username');
              window.location.href = '/admin';
            }}
          >
            Back to login
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
