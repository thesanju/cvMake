import React from 'react';
import { TextInput, TextArea } from './FormComponents';

const ExperienceForm = ({ experience, handleExperienceChange, addExperience, removeExperience }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Work Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-6 pb-6 border-b">
          <div className="flex justify-between items-center">
            <h3 className="text-lg mb-2 text-gray-600">Position {index + 1}</h3>
            {index > 0 && (
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeExperience(index)}
              >
                Remove
              </button>
            )}
          </div>
          <TextInput
            label="Job Title"
            value={exp.title}
            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
          />
          <TextInput
            label="Company"
            value={exp.company}
            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
          />
          <div className="flex space-x-4">
            <div className="w-1/2">
              <TextInput
                label="Start Date"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label="End Date"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
              />
            </div>
          </div>
          <TextArea
            label="Description"
            value={exp.description}
            onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
          />
        </div>
      ))}
      <button
        className="mt-2 mb-6 bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
        onClick={addExperience}
      >
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;