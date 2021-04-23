import React from 'react';

const UsersList = ({users}) => {
    return (
        <div>
            <h1>users</h1>
            <ul>
                {users.map(user => { return <li key={user.id}>{user.message}</li>})}
                
            </ul>
        </div>
    );
};

export default UsersList;