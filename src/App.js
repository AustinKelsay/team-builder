import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Form from './Form';
import './App.css';
import TeamCard from './teamcard';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const [team, setTeam] = useState([]);
  
  return (
    <div className="App">
      <Form form={formData} setForm={setFormData} setTeam={setTeam}/>
      <TeamCard team={team} />
    </div>
  );
}

export default App;
