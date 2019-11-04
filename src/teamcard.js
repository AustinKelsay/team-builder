import React, {useState} from 'react';
import ReactDom from 'react-dom';

const TeamCard = props => {
    console.log(props);
    return(
        <div>
        <h3>Name: {props.name}</h3>
        <h3>Email: {props.email}</h3>
        <h3>Role: {props.role}</h3>
        </div>
    )
}

export default TeamCard;