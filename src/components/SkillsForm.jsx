import React from 'react';
import { TextArea } from './FormComponents';

const SkillsForm = ({ skills, handleChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Skills</h2>
      <TextArea 
        label="Skills (comma separated)" 
        name="skills" 
        value={skills} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default SkillsForm;