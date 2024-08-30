import React from 'react';
import PersonalInformation from './Forms/PersonalInformation';
import WorkExperience from './Forms/WorkExperience';
import Project from './Forms/Project';
import SkillSection from './Forms/SkillsSection';
import Educational from './Forms/Educational';
import Summary from './Forms/Summary'; // Import the Summary component

const FormSection = ({
  formData,
  handleChange,
  step,
  addProject,
  removeProject,
  updateProject,
  addSkill,
  removeSkill,
  updateSkill,
  addEducation,
  removeEducation,
  updateEducation,
  setSummary
}) => {
  console.log("Current Step:", step); // Debugging step value

  return (
    <>
      {step === 1 && (
        <PersonalInformation formData={formData} handleChange={handleChange} />
      )}

      {step === 2 && (
        <Summary
          summary={formData.summary}
          handleChange={handleChange}
          jobTitle={formData.jobTitle} // Pass jobTitle
          setSummary={setSummary} // Pass setSummary
        />
      )}

      {step === 3 && (
        <WorkExperience formData={formData} handleChange={handleChange} />
      )}

      {step === 4 && (
        <div>
          {formData.projects.map((project, index) => (
            <Project
              key={index}
              projectData={project}
              handleChange={(e) => {
                const { name, value } = e.target;
                updateProject(index, { ...project, [name]: value });
              }}
              onRemoveProject={() => removeProject(index)}
            />
          ))}
          <button
            type="button"
            onClick={addProject}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4"
          >
            Add Another Project
          </button>
        </div>
      )}

      {step === 5 && (
        <SkillSection
          skillData={formData.skills}
          handleChange={(index, updatedSkill) => updateSkill(index, updatedSkill)}
          addSkill={addSkill}
          removeSkill={removeSkill}
        />
      )}

      {step === 6 && (
        <Educational
          formData={formData}
          handleChange={handleChange}
          addEducation={addEducation}
          removeEducation={removeEducation}
          updateEducation={updateEducation}
        />
      )}
    </>
  );
};

export default FormSection;
