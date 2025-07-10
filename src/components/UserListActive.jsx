import React from 'react';

const UserListActive = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        const buttonStyle = {
          padding: "10px 16px",
          backgroundColor: user.isOnline ? "green" : "red",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          cursor: "default",
          opacity: 1,
          fontSize: "16px",
          margin: "5px",
        };

        return (
          <button key={user.id} style={buttonStyle}>
            {user.name}
          </button>
        );
      })}
    </div>
  );
};

export default UserListActive;
