import React from 'react';

const TrainerCard = ({ img, name, details }) => {
  return (
    <div className="max-w-sm m-4 rounded-xl">
      <img className="w-full h-full object-cover rounded-xl shadow-2xl hover:shadow-blue-500/40" src={img} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-5 text-red-300 ">{name}</div>
        <p className="text-white text-lg italic text-zinc-300">
          {details}
        </p>
      </div>
    </div>
  );
};

export default TrainerCard;
