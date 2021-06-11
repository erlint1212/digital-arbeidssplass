import React from 'react';
import '../styles/index.css';

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}