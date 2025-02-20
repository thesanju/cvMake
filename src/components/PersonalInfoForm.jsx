import React from 'react';
import { TextInput, TextArea } from './FormComponents';

const PersonalInfoForm = ({ data, handleChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h2>
      <TextInput 
        label="Full Name" 
        name="name" 
        value={data.name} 
        onChange={handleChange} 
      />
      <TextInput 
        label="Email" 
        name="email" 
        value={data.email} 
        onChange={handleChange} 
      />
      <TextInput 
        label="Phone" 
        name="phone" 
        value={data.phone} 
        onChange={handleChange} 
      />
      <TextInput 
        label="Location" 
        name="location" 
        value={data.location} 
        onChange={handleChange} 
      />
      <TextArea 
        label="Professional Summary" 
        name="summary" 
        value={data.summary} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default PersonalInfoForm;