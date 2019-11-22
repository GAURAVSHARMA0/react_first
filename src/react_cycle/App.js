import React from 'react';
import './App.css';
import ParentComponent from './ParentComponent';

function App() {
  console.log('IN [app] ===> function');
  return (
    <ParentComponent name="Shivam Props" />
  );
}

export default App;
