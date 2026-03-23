//------------ex1-----------------

db.createCollection("students");

db.students.insertMany([
  { name: "Noam", age: 19, city: "Rabat", major: "AI" },
  { name: "Clara", age: 26, city: "Paris", major: "Cybersecurity" },
  { name: "Kenji", age: 22, city: "Tokyo", major: "Web Dev" },
  { name: "Ines", age: 31, city: "Madrid", major: "Data Science" },
  { name: "Jordan", age: 24, city: "New York", major: "AI" },
]);

db.students.find({
  age: { $gte: 18, $lte: 25 },
});

// output examples
// { name: 'Noam', age: 19, city: 'Rabat', major: 'AI' }
// { name: 'Kenji', age: 22, city: 'Tokyo', major: 'Web Dev' }
// { name: 'Jordan', age: 24, city: 'New York', major: 'AI' }

db.students.updateOne({ name: "Noam" }, { $set: { city: "Casablanca" } });

db.students.deleteOne({ name: "Clara" });


db.students.updateMany({ major: "AI" }, { $set: { major: "Generative AI" } });

db.students.find().pretty();

//------------ex2-----------------

//------------ex3-----------------

//------------ex4-----------------

//------------ex5-----------------

//------------ex6-----------------
