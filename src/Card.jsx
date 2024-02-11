import React from 'react';

const UserProfileCard = ({ user }) => {
  const {
    name,
    location,
    email,
    dob,
    registered,
    phone,
    cell,
    id,
    picture,
    nat,
  } = user;

  return (
    <div className="  w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <div className="flex  items-center p-10 gap-4">

        <div className="flex flex-col items-center  justify-center h-full">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={picture.large}
          alt={`${name.first} ${name.last}'s profile`}
        />
         <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {`${name.title} ${name.first} ${name.last}`}
        </h5>
        </div>
       
        <div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Email: {email}<br />
          Date of Birth: {new Date(dob.date).toLocaleDateString()} (Age: {dob.age})<br />
          Registered on: {new Date(registered.date).toLocaleDateString()} ( {registered.age} years ago)<br />
          Phone: {phone}<br />
          Cell: {cell}<br />
          ID: {id.name} - {id.value}<br />
          Nationality: {nat}<br />
          Location: {`${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}, ${location.postcode}`}
        </span>
        </div>
       
       
      </div>
    </div>
  );
};

export default UserProfileCard;
