import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ResumePDF from './components/PDFComponents';
import PersonalInfoForm from './components/PersonalInfoForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: [
      { title: '', company: '', startDate: '', endDate: '', description: '' }
    ],
    education: [
      { degree: '', institution: '', year: '' }
    ],
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index][field] = value;
    setResumeData({ ...resumeData, experience: updatedExperience });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        { title: '', company: '', startDate: '', endDate: '', description: '' }
      ]
    });
  };

  const removeExperience = (index) => {
    const newExperience = [...resumeData.experience];
    newExperience.splice(index, 1);
    setResumeData({ ...resumeData, experience: newExperience });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index][field] = value;
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { degree: '', institution: '', year: '' }
      ]
    });
  };

  const removeEducation = (index) => {
    const newEducation = [...resumeData.education];
    newEducation.splice(index, 1);
    setResumeData({ ...resumeData, education: newEducation });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-2 flex flex-col justify-center items-center">
      <div className="w-11/12 h-[90vh] bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="w-full h-full p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Resume Builder</h1>
          
          <div className="flex flex-col md:flex-row h-[calc(100%-60px)]">
            <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-4 md:mb-0 overflow-auto h-full">
              <div className="bg-white rounded-lg p-6 shadow-inner h-full">
                <PersonalInfoForm 
                  data={resumeData} 
                  handleChange={handleChange} 
                />
                
                <ExperienceForm 
                  experience={resumeData.experience}
                  handleExperienceChange={handleExperienceChange}
                  addExperience={addExperience}
                  removeExperience={removeExperience}
                />
                
                <EducationForm 
                  education={resumeData.education}
                  handleEducationChange={handleEducationChange}
                  addEducation={addEducation}
                  removeEducation={removeEducation}
                />
                
                <SkillsForm 
                  skills={resumeData.skills}
                  handleChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 pl-0 md:pl-6 h-full">
              <div className="bg-gray-100 rounded-lg p-4 shadow h-full">
                <h2 className="text-xl font-semibold mb-4 text-gray-700 pl-2">Resume Preview</h2>
                <div className="border border-gray-300 rounded-lg shadow-inner h-[calc(100%-40px)] bg-white">
                  <PDFViewer style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}>
                    <ResumePDF data={resumeData} />
                  </PDFViewer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;