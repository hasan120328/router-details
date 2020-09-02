import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
        const {name,id,email,}=props.friend;
        console.log(props);
        const history=useHistory();
        const handleClick=(friendId)=>{
            const url=`/friend/${friendId}`
            history.push(url);
        }
        
     const friendStyle={
         border:'2px solid gray', 
         margin:'14px', 
         padding:'8px', 
         borderRadius:'7px'
     }
    return (
        <div style={friendStyle}>
            <h1>name:{name}</h1>
           <h2> email{email}</h2>        
          <h4><Link to={`friend/${id}`} >show details of {id}</Link></h4>
         {/* <button onclick={()=> handleClick(id)}>click me</button>
    */}
        </div>
    );
};

export default Friends;