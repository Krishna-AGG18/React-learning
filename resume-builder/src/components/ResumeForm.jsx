import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ResumeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    education: [{ school: '', degree: '', fieldOfStudy: '', graduationYear: '' }],
    experience: [{ company: '', position: '', startDate: '', endDate: '', description: '' }],
    skills: [''],
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value },
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [name]: value } : edu
      ),
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, [name]: value } : exp
      ),
    }));
  };

  const handleSkillChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => (i === index ? value : skill)),
    }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { school: '', degree: '', fieldOfStudy: '', graduationYear: '' }],
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', position: '', startDate: '', endDate: '', description: '' }],
    }));
  };

  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, ''],
    }));
  };

  const removeEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const removeExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const removeSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.personalInfo.name}
            onChange={handlePersonalInfoChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.personalInfo.email}
            onChange={handlePersonalInfoChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.personalInfo.phone}
            onChange={handlePersonalInfoChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.personalInfo.location}
            onChange={handlePersonalInfoChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.personalInfo.summary}
          onChange={handlePersonalInfoChange}
          className="w-full p-2 border rounded h-32"
          required
        />
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Education</h2>
          <button type="button" onClick={addEducation} className="text-blue-600 hover:text-blue-800">
            <Plus className="w-6 h-6" />
          </button>
        </div>
        {formData.education.map((edu, index) => (
          <div key={index} className="space-y-4 p-4 border rounded relative">
            {formData.education.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Minus className="w-5 h-5" />
              </button>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="school"
                placeholder="School"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, e)}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="fieldOfStudy"
                placeholder="Field of Study"
                value={edu.fieldOfStudy}
                onChange={(e) => handleEducationChange(index, e)}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="graduationYear"
                placeholder="Graduation Year"
                value={edu.graduationYear}
                onChange={(e) => handleEducationChange(index, e)}
                className="p-2 border rounded"
                required
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Experience</h2>
          <button type="button" onClick={addExperience} className="text-blue-600 hover:text-blue-800">
            <Plus className="w-6 h-6" />
          </button>
        </div>
        {formData.experience.map((exp, index) => (
          <div key={index} className="space-y-4 p-4 border rounded relative">
            {formData.experience.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Minus className="w-5 h-5" />
              </button>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, e)}
                className="p-2 border rounded"
                required
              />
              <input
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, e)}
                className="p-2 border rounded"
                required
              />
              <input
                type="date"
                name="endDate"
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, e)}
                className="p-2 border rounded"
                required
              />
            </div>
            <textarea
              name="description"
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border rounded h-32"
              required
            />
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Skills</h2>
          <button type="button" onClick={addSkill} className="text-blue-600 hover:text-blue-800">
            <Plus className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="p-2 border rounded flex-1"
                required
              />
              {formData.skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Minus className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Generate Resume
      </button>
    </form>
  );
}