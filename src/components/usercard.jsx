// write the component code here
import React from "react";

const UserCard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, City, Country";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white border border-gray-200">
      <img className="w-32 h-32 mx-auto rounded-full" src={profilePhoto} alt="Profile" />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default UserCard;
