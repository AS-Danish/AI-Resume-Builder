import React from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ResumePreview = ({ formData }) => {
  const sectionTextColor = '#ff6666';

  const safeFormData = {
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    jobTitle: formData.jobTitle || '',
    address: formData.address || '',
    phone: formData.phone || '',
    email: formData.email || '',
    summary: formData.summary || '',
    workExperiences: formData.workExperiences || [],
    projects: formData.projects || [],
    skills: formData.skills || [],
    education: formData.education || [],
  };

  return (
    <div className="resume-preview-container w-[210mm] min-h-[297mm] p-6 bg-white rounded-lg shadow-lg">
      <div className='w-full h-5 bg-[#ff6666] mb-2'></div>
      <div>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#ff6666]">
            {safeFormData.firstName} {safeFormData.lastName}
          </h1>
          <p className="text-xl text-gray-800 mt-2 font-semibold">{safeFormData.jobTitle}</p>
          <p className='text-[#ff6666] font-semibold'>{safeFormData.address}</p>
          <div className="flex justify-center gap-8 mt-4">
            <p className="text-[#ff6666] flex items-center">
              <FontAwesomeIcon icon={faPhone} size="lg" className="text-[#ff6666] mr-2" />
              {safeFormData.phone}
            </p>
            <p className='text-[#ff6666] flex items-center'>
              <FontAwesomeIcon icon={faEnvelope} size="lg" className='mr-2' />
              {safeFormData.email}
            </p>
          </div>
        </div>
        
        {/* Summary */}
        <section className="mb-8">
          <div className="text-center">
            <div className="w-full h-1 bg-[#ff6666] mb-4"></div>
          </div>
          <p className="text-gray-600">
            {safeFormData.summary}
          </p>
        </section>
      
        {/* Work Experience */}
        <section className="mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold" style={{ color: sectionTextColor }}>
              Work Experience
            </h3>
            <div className="w-full h-1 bg-[#ff6666] mt-2 mb-4"></div>
          </div>
          {safeFormData.workExperiences.length > 0 ? (
            safeFormData.workExperiences.map((experience, index) => (
              <div key={index} className="text-gray-600 mb-4">
                <p className="font-bold text-[#ff6666]">
                  {experience.jobTitle} at {experience.company}
                </p>
                <p className="text-sm italic mb-2">{experience.startDate} - {experience.endDate}</p>
                <ul className="list-disc list-inside ml-6">
                  {experience.responsibilities.split('\n').map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No work experience provided.</p>
          )}
        </section>

        {/* Projects */}
        <section className="mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold" style={{ color: sectionTextColor }}>
              Projects
            </h3>
            <div className="w-full h-1 bg-[#ff6666] mt-2 mb-4"></div>
          </div>
          {safeFormData.projects.length > 0 ? (
            <div className="text-gray-600">
              {safeFormData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold text-[#ff6666]">{project.projectName}</p>
                  <p className="text-sm italic mb-2">{project.startDate} - {project.endDate}</p>
                  <ul className="list-disc list-inside ml-6">
                    {project.description.split('\n').map((desc, idx) => (
                      <li key={idx} className="mb-2">{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No projects provided.</p>
          )}
        </section>

        {/* Skills */}
        <section className="mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold" style={{ color: sectionTextColor }}>
              Skills
            </h3>
            <div className="w-full h-1 bg-[#ff6666] mt-2 mb-4"></div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {safeFormData.skills.length > 0 ? (
              safeFormData.skills.slice(0, 10).map((skill, index) => (
                <p key={index} className="text-[#ff6666] font-bold text-center">
                  {skill.skillName}
                </p>
              ))
            ) : (
              <p className="text-gray-600">No skills provided.</p>
            )}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold" style={{ color: sectionTextColor }}>
              Education
            </h3>
            <div className="w-full h-1 bg-[#ff6666] mt-2 mb-4"></div>
          </div>
          {safeFormData.education.length > 0 ? (
            <div className="text-gray-600">
              {safeFormData.education.map((edu, index) => (
                <div key={index} className="mb-4 flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[#ff6666]">{edu.degree}</p>
                    <p className="text-sm italic mb-2">from {edu.institution}</p>
                    <p className="text-sm italic mb-2">{edu.year}</p>
                  </div>
                  <p className="text-sm text-gray-600 text-right">{edu.cgpa}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No education information provided.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ResumePreview;
