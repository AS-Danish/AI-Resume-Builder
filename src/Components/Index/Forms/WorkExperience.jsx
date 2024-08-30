import React from 'react';

const WorkExperience = ({ formData, handleChange }) => {
  const { workExperiences } = formData;

  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index] = {
      ...newWorkExperiences[index],
      [name]: value,
    };
    handleChange({ target: { name: 'workExperiences', value: newWorkExperiences } });
  };

  const addWorkExperience = () => {
    handleChange({ target: { name: 'workExperiences', value: [...workExperiences, { jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' }] } });
  };

  const removeWorkExperience = (index) => {
    handleChange({ target: { name: 'workExperiences', value: workExperiences.filter((_, i) => i !== index) } });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Work Experience</h2>
      {workExperiences.map((experience, index) => (
        <div key={index} className="mb-6 p-6 border border-gray-300 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={experience.jobTitle}
                onChange={(e) => handleWorkExperienceChange(index, e)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={experience.company}
                onChange={(e) => handleWorkExperienceChange(index, e)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleWorkExperienceChange(index, e)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={(e) => handleWorkExperienceChange(index, e)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities</label>
            <textarea
              name="responsibilities"
              value={experience.responsibilities}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              className="w-full border border-gray-300 p-2 rounded-md"
              rows="4"
            />
          </div>
          <button
            type="button"
            onClick={() => removeWorkExperience(index)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Remove Experience
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addWorkExperience}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
