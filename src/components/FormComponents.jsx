import React from 'react';

export const TextInput = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const TextArea = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      name={name}
      value={value}
      onChange={onChange}
      rows="4"
    />
  </div>
);