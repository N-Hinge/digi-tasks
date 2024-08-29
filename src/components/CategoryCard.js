import React from 'react';

const CategoryCard = ({ title }) => {
  return (
    <div className="bg-lightBlack text-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default CategoryCard;
