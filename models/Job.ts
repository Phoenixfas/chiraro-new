const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Temporary'],
  },
  description: {
    type: String,
  },
  responsibilities: {
    type: [String],
  },
  qualifications: {
    type: [String],
  },
  skills: {
    type: [String],
  },
  salary: {
    type: String,
  },
  logo: {
    type: String,
    default: 'https://res.cloudinary.com/dbvzchrg2/image/upload/v1714556646/dnkjofqingekemk0fpbr.png'
  },
  requirements: {
    type: [String],
  },
  overview: {
    ["Job Title"]: {
      type: String,
    },
    ["Experience"]: {
      type: String,
    },
    ["Location"]: {
      type: String,
    },
    ["Salary"]: {
      type: String,
    },
    ["Qualifications"]: {
      type: String,
    },
    ["Type"]: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Temporary'],
    }
  },
  date: {
    type: Date,
  }
});

let Job: any;
if (mongoose.models.Job) {
  Job = mongoose.model('Job');
} else {
  Job = mongoose.model('Job', jobSchema);
}

export default Job;