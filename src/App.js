import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Cards, Charts, CountryPicker } from './components';

function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
