// const mongoose = require("mongoose");

// const annotationSchema = new mongoose.Schema({
//   x: Number,
//   y: Number,
//   width: Number,
//   height: Number,
//   content: String,
// });

// const metadataSchema = new mongoose.Schema({
//   name: { type: String },
//   lastModifiedDate: { type: Date },
//   size: { type: mongoose.Schema.Types.Mixed }, // Size can be a number or string
//   type: { type: String },
//   location: { type: String },
//   byte: { type: Number },
//   tags: { type: mongoose.Schema.Types.Mixed }, // Flexible field for additional metadata
//   annotations: [annotationSchema], // Array of annotation objects
// });

// const MetadataModel = mongoose.model("Metadata", metadataSchema);
// const AnnotationModel = mongoose.model("Annotation", annotationSchema);

// module.exports = { MetadataModel, AnnotationModel };

const mongoose = require("mongoose");

const metadataSchema = new mongoose.Schema({
  name: String,
  lastModifiedDate: Date,
  size: Number,
  type: String,
  location: String,
  byte: Number,
  tags: Object,
  annotations: [
    {
      name: String,
      bndbox: {
        xmin: Number,
        ymin: Number,
        xmax: Number,
        ymax: Number,
      },
      height: Number,
      width: Number,
    },
  ],
});

const MetadataModel = mongoose.model("Metadata", metadataSchema);

module.exports = { MetadataModel };
