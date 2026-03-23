//------------ex1-----------------

const mongoose = require("mongoose");

const todoShape = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You must provide a task title"],
  },
  description: String,
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TodoDoc = mongoose.model("TodoDoc", todoShape);

const insertSampleTodo = async () => {
  try {
    const created = await TodoDoc.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for the MongoDB bootcamp",
    });
    console.log("Task Created:", created);
  } catch (saveErr) {
    console.error("Error:", saveErr.message);
  }
};

const listTodos = async () => {
  const rows = await TodoDoc.find();
  console.log("Current Tasks:", rows);
};

const markTodoDone = async (id) => {
  await TodoDoc.findByIdAndUpdate(id, { status: "completed" });
  console.log("Task marked as completed!");
};

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/collegeDB");
    console.log("Connected to MongoDB");

    await TodoDoc.deleteMany();

    try {
      await TodoDoc.create({ description: "This task has no title" });
    } catch (e) {
      console.log("Missing Title Error:", e.message);
    }

    try {
      await TodoDoc.create({
        title: "Invalid Status Task",
        status: "in-progress",
      });
    } catch (e) {
      console.log("Invalid Status Error:", e.message);
    }

    await insertSampleTodo();
    await listTodos();
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.connection.close();
  }
};

main();

//------------ex2-----------------

//------------ex3-----------------

//------------ex4-----------------

//------------ex5-----------------

//------------ex6-----------------
