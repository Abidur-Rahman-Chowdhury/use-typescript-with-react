import React, { useEffect, useState } from 'react';
import UserModel from './types/models';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([])
    const [team, setTeam] = useState<UserModel[]>([])
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        .then(data => setUsers(data))

     }, [])
    const addUser = (user: UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam);
        
    }
    
    return (
        <div>
            <h2> My Users</h2>
            <h3>Team size:{ team.length}</h3>
            {/* <User name='Rahamot' age={55} addUser={addUser}></User> */}
            {
                users.map(user => <User user={user} addUser={addUser}></User>)
            }
        </div>
    );
};

export default Users;