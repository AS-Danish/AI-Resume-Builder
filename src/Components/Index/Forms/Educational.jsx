import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Educational = ({ formData, handleChange, addEducation, removeEducation, updateEducation }) => {
  const { education } = formData;

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      [name]: value,
    };
    updateEducation(index, newEducation[index]);
  };

  const handleDateChange = (index, date) => {
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      year: date ? date.toISOString().split('T')[0] : '',
    };
    updateEducation(index, newEducation[index]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6 p-6 border border-gray-300 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <input
                type="text"
                name="degree"
                value={edu.degree || ''}
                onChange={(e) => handleEducationChange(index, e)}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="Degree"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
              <input
                type="text"
                name="institution"
                value={edu.institution || ''}
                onChange={(e) => handleEducationChange(index, e)}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="Institution"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <DatePicker
                selected={edu.year ? new Date(edu.year) : null}
                onChange={(date) => handleDateChange(index, date)}
                dateFormat="yyyy-MM-dd"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">CGPA / Percentage</label>
              <input
                type="text"
                name="cgpa"
                value={edu.cgpa || ''}
                onChange={(e) => handleEducationChange(index, e)}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="CGPA / Percentage"
              />
            </div>
          </div>
          {education.length > 1 && (
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4"
            >
              Remove Education
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4"
      >
        Add Another Education
      </button>
    </div>
  );
};

export default Educational;
