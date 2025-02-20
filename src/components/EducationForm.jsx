import React from 'react';
import { TextInput } from './FormComponents';

const EducationForm = ({ education, handleEducationChange, addEducation, removeEducation }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6 pb-6 border-b">
          <div className="flex justify-between items-center">
            <h3 className="text-lg mb-2 text-gray-600">Education {index + 1}</h3>
            {index > 0 && (
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeEducation(index)}
              >
                Remove
              </button>
            )}
          </div>
          <TextInput
            label="Degree/Certification"
            value={edu.degree}
            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
          />
          <TextInput
            label="Institution"
            value={edu.institution}
            onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
          />
          <TextInput
            label="Year"
            value={edu.year}
            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
          />
        </div>
      ))}
      <button
        className="mt-2 mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
        onClick={addEducation}
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;