const mongoose = require('mongoose');

const JobappSchema = new mongoose.Schema({
  jobInfo: {
    jobID: { type: String, required: true },
    jobTitle: { type: String, required: true },
  },
  personalInfo: {
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    residentialAddress: { type: String, required: true },
  },
  academicInfo: {
    universityName: { type: String, required: true },
    currentYearOfStudy: { type: Number, required: true },
    major: { type: String, required: true },
    expectedGraduationDate: { type: Date },
  },
  experience: [
    {
      workTitle: { type: String },
      companyName: { type: String },
      duties: { type: String },
      skillsAcquired: { type: String },
    },
  ],
  availability: {
    preferredStartDate: { type: Date, required: true },
    preferredDuration: { type: String, required: true },
    weeklyAvailability: { type: Number, required: true },
  },
  skills: {
    microsoftOfficeProficiency: { type: String },
    communicationSkills: { type: String },
    otherSkills: { type: String },
  },
  attachments: {
    resume: { type: String },
    coverLetter: { type: String },
    additionalDocuments: [{ type: String }],
  },
  additionalInfo: { type: String },
  declaration: {
    isConfirmed: { type: Boolean, required: true },
  },
});

const Jobapp = mongoose.models.Jobapp || mongoose.model('Jobapp', JobappSchema);
export default Jobapp;

