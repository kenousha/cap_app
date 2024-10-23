import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = ({ username }) => {
  return (
    <div className="profile-card">
      <ul className="profile-card__list">
        <li>
          <Link to="/ProfileForm">Your Profile</Link>
        </li>
        <li>
          <Link to="/reports">Your Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;