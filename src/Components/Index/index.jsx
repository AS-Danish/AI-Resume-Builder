import React, { useState } from 'react';
import FormSection from './FormSection';
import SuccessPage from './SuccessPage'; // Import the SuccessPage component
import ResumePreview from './ResumePreview'

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    address: '',
    phone: '',
    email: '',
    summary: '',
    workExperiences: [{ jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' }],
    projects: [{ projectName: '', description: '', startDate: '', endDate: '' }],
    skills: [{ skillName: '' }],
    education: [{ degree: '', institution: '', year: '' }]
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false); // New state to track submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => (prevStep < 6 ? prevStep + 1 : prevStep));
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleSubmit = () => {
    setSubmitted(true); // Update state to show success page
  };

  const addProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [...prevData.projects, { projectName: '', description: '', startDate: '', endDate: '' }],
    }));
  };

  const removeProject = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      projects: prevData.projects.filter((_, i) => i !== index),
    }));
  };

  const updateProject = (index, updatedProject) => {
    const updatedProjects = formData.projects.map((project, i) =>
      i === index ? updatedProject : project
    );
    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, { skillName: '' }],
    }));
  };

  const removeSkill = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, i) => i !== index),
    }));
  };

  const updateSkill = (index, updatedSkill) => {
    const updatedSkills = formData.skills.map((skill, i) =>
      i === index ? updatedSkill : skill
    );
    setFormData((prevData) => ({
      ...prevData,
      skills: updatedSkills,
    }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { degree: '', institution: '', year: '' }],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index),
    }));
  };

  const updateEducation = (index, updatedEducation) => {
    const updatedEducationArray = formData.education.map((education, i) =>
      i === index ? updatedEducation : education
    );
    setFormData((prevData) => ({
      ...prevData,
      education: updatedEducationArray,
    }));
  };

  const setSummary = (summary) => {
    setFormData((prevData) => ({
      ...prevData,
      summary,
    }));
  };

  return (
    <div>
      {submitted ? (
        <SuccessPage formData={formData} /> // Render SuccessPage if submitted
      ) : (
        <div className="p-4 min-h-screen">
          <nav className="bg-white rounded-full shadow-md py-4 px-6 mb-8 flex justify-center">
            <h1 className="text-xl font-bold text-purple-700">Resume Builder</h1>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex justify-end mb-4">
                {step > 1 && (
                  <button
                    className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded"
                  onClick={step === 6 ? handleSubmit : handleNext}
                >
                  {step === 6 ? 'Submit' : 'Next'}
                </button>
              </div>

              <FormSection
                formData={formData}
                handleChange={handleChange}
                step={step}
                addProject={addProject}
                removeProject={removeProject}
                updateProject={updateProject}
                addSkill={addSkill}
                removeSkill={removeSkill}
                updateSkill={updateSkill}
                addEducation={addEducation}
                removeEducation={removeEducation}
                updateEducation={updateEducation}
                setSummary={setSummary}
              />
            </div>

            <div>
              <ResumePreview formData={formData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
