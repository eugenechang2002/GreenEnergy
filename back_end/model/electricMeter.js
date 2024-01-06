const mongoose = require('mongoose');
const electricMeterSchema = new mongoose.Schema(
  {
    electricMeterId:{
        type:String,
    },
    electricMeterName: {
      type: String,
    },
    location: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    model: {
      type: String,
    },
    electricCapacity: {
      type: String,
    },
    installationMethod: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
  },
  cloudStatus: {
      type: Number,
      required: true,
  },
  workingStatus: {
      type: Number,
      required: true,
  },
  activeStatus: {
      type: Number,
      required: true,
  },   
  meausurementAccuracy: {
        type: String,
      },
    dimensions: {
      type: String,
    },
    deploymentDate: {
        type: String,
    },
    installationDate: {
        type: String,
    },
    power: {
        type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model('ElectricMeter', electricMeterSchema);
