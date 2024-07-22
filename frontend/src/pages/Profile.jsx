import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.username}</h1>
          <img src={user.profile_image} alt="Profile" />
          {/* Add file upload functionality here */}
        </div>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default Profile;
