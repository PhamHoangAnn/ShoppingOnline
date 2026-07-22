import React, { Component } from 'react';

// Prevents the whole app from going blank-white when a component throws.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Customer app crashed:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <p>Please go back to the homepage and try again.</p>
          <button
            onClick={() => { window.location.href = '/home'; }}
          >
            Back to home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
