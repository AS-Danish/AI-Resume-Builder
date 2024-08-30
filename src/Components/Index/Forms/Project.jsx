import React from 'react';

const Project = ({ projectData, handleChange, onRemoveProject }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">Project Details</h2>
        <button
          type="button"
          onClick={onRemoveProject}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Remove Project
        </button>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={projectData.projectName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter project name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={projectData.startDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={projectData.endDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={projectData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="4"
            placeholder="Enter project description"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
