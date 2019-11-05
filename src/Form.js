import React, {useState} from 'react';
import ReactDom from 'react-dom';
import TeamCard from './teamcard';

const Form = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();                          
        const { name, email, role } = props.form;
        props.setTeam(prevTeam => [...prevTeam, { name, email, role }]);
        props.setForm({ name: '', email: '', role: '' });
      };

      const handleChange = event => {
        props.setForm({
            ...props.form,
            [event.target.name]: event.target.value
        })
      };

    return(
      <form onSubmit={event => handleSubmit(event)}> 
        <label htmlFor='nameInput'>First Name</label>
        <input
          onChange={event => handleChange(event)}
          maxLength='15'
          placeholder='First Name'
          id='nameInput'
          name='name'
          type='text'
          value={props.form.name}
         />
         <br/>
       <label htmlFor='emailInput'>Your Email</label>
       <input
         onChange={event => handleChange(event)}
         maxLength='25'
         placeholder='Email'
         id='emailInput'
         name='email'
         type='text'
         value={props.form.email}
        />
        <br/>
        <label htmlFor='roleinput'>Your Role</label>
        <input
         onChange={event => handleChange(event)}
         maxLength='25'
         placeholder='Role'
         id='roleInput'
         name='role'
         type='text'
         value={props.form.role}
        />
        <br/>
        <div>
          <button>Submit</button>
        </div>
      </form>)
}

export default Form;