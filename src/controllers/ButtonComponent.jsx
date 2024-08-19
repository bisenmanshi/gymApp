
import React from 'react';

const ButtonComponent = ({ buttons, onClick }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-10">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className="px-4 py-2 bg-slate-800 font-bold text-white flex rounded hover:bg-gray-900"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonComponent;
