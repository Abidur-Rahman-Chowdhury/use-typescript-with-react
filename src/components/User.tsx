import React, { FC } from 'react';
import UserModel from './types/models';

// interface Props {
//     age: number,
//     name: string,
//     addUser: ()=> void
// }

interface Props {
    user: UserModel,
    addUser: (user: UserModel)=> void
}
const User: FC<Props> = ({user,addUser}) => {
    
    return (
        <div>
            <h2>Hello From : {user.name}</h2>
            <p>Email: { user.email }</p>
            
            <button onClick={()=>  addUser(user)}>Add me</button>
        </div>
    );
};

export default User;