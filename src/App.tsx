import React from 'react';
import './App.css';
import './Card/Card';
import Card from "./Card/Card";
function App() {
  return (
    <div className="App">
      <Card header={"Form"} footer={""} size={3}>
        <p>asdas</p>
      </Card>
    </div>
  );
}

export default App;
