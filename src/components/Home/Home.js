import React, { useState, useEffect } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const[friends,setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <p>property length:{friends.length}</p>
             {
                 friends.map(friend=><Friends friend={friend}></Friends>)
             }
        </div>
    );
};

export default Home;