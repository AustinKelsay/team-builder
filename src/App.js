import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Form from './Form';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  return (
    <div className="App">
      <Form form={formData} setForm={setFormData}/>
    </div>
  );
}

export default App;
