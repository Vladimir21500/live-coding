import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState({
    avatarUrl: null,
    name: null,
    location: null,
  });

  const { userId } = useParams();

  const fetchUserInfo = async () => {
    const response = await fetch(`https://api.github.com/users/${userId}`);

    const { avatar_url: avatarUrl, name, location } = await response.json();

    setUserData({
      avatarUrl,
      name,
      location,
    });
  };

  useEffect(() => {
    fetchUserInfo(userId);
  }, [userId]);

  const { avatarUrl, name, location } = userData;

  return (
    <div className='user'>
      <img alt='User Avatar' src={avatarUrl} className='user__avatar' />
      <div className='user__info'>
        <span className='user__name'>{name}</span>
        <span className='user__location'>{location}</span>
      </div>
    </div>
  );
};

export default User;
