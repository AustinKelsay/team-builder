import React, {useState} from 'react';
import ReactDom from 'react-dom';

const TeamCard = ({team}) => {
    console.log(team);
    if (team.length < 1) {
    console.log('error') 
    return(
        <h1>What do you wan to return</h1>
    )

}

    return(
        team.map((item) => {
            return(

        <div>
        <h3>Name: {item.name}</h3>
        <h3>Email: {item.email}</h3>
        <h3>Role: {item.role}</h3>
        </div>)
    
})
    )
}

export default TeamCard;