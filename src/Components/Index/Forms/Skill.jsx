import React from 'react';

const Skill = ({ skillData, handleChange, onRemoveSkill }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
      <input
        type="text"
        name="skillName"
        value={skillData.skillName}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded-md"
        placeholder="Enter skill"
        required
      />
      <button
        type="button"
        onClick={onRemoveSkill}
        className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default Skill;
