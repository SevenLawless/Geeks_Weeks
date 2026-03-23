//------------ex1 & ex2-----------------

const mongoose = require("mongoose");

const enrolleeShape = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is mandatory"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: [18, "Students must be at least 18 years old"],
  },
});

const Enrollee = mongoose.model("Enrollee", enrolleeShape);

const runValidationDemo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/collegeDB");
    console.log("Connection successful: Node.js is talking to MongoDB.");

    const draft = new Enrollee({
      name: "Rami",
      email: "rami@school.com",
      age: 16,
    });
    await draft.save();
  } catch (validationErr) {
    console.log("Validation Error Caught:", validationErr.message);
  } finally {
    await mongoose.connection.close();
  }
};

runValidationDemo();

//------------ex3-----------------

//------------ex4-----------------

//------------ex5-----------------

//------------ex6-----------------
