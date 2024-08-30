import React from 'react';
import Skill from './Skill';

const SkillSection = ({ skillData, handleChange, addSkill, removeSkill }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Skills</h2>
      {skillData.map((skill, index) => (
        <Skill
          key={index}
          skillData={skill}
          handleChange={(e) => {
            const { name, value } = e.target;
            handleChange(index, { ...skill, [name]: value });
          }}
          onRemoveSkill={() => removeSkill(index)}
        />
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4"
      >
        Add Another Skill
      </button>
    </div>
  );
};

export default SkillSection;
