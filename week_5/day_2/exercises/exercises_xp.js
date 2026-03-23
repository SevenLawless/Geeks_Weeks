//------------ex1-----------------

const mongoose = require("mongoose");

const writerShape = new mongoose.Schema({
  displayName: String,
  contactEmail: String,
});
const Writer = mongoose.model("Writer", writerShape);

const pieceShape = new mongoose.Schema({
  heading: String,
  excerpt: String,
  writtenBy: { type: mongoose.Schema.Types.ObjectId, ref: "Writer" },
});
const Piece = mongoose.model("Piece", pieceShape);

const runPopulateLab = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testDB");

  const author = await Writer.create({
    displayName: "Sara",
    contactEmail: "sara@mail.com",
  });
  await Piece.create({
    heading: "MongoDB is Powerful",
    excerpt: "Exploring data relationships in MongoDB",
    writtenBy: author._id,
  });

  const found = await Piece.findOne({ heading: "MongoDB is Powerful" }).populate(
    "writtenBy"
  );
  console.log(`Article: ${found.heading}`);
  console.log(`Contributor: ${found.writtenBy.displayName}`);

  await mongoose.disconnect();
};

//------------ex2-----------------

const pupilShape = new mongoose.Schema({
  name: String,
  touchedAt: Date,
});

pupilShape.pre("save", function hook(next) {
  this.touchedAt = Date.now();
  next();
});

const Pupil = mongoose.model("Pupil", pupilShape);

const runHookLab = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testDB");

  let pupil = await Pupil.create({ name: "Ali" });
  console.log(pupil);

  pupil.name = "Ali Updated";
  await pupil.save();
  console.log(pupil);

  await mongoose.disconnect();
};

runPopulateLab()
  .then(() => runHookLab())
  .catch((err) => console.error(err));

//------------ex3-----------------

//------------ex4-----------------

//------------ex5-----------------

//------------ex6-----------------
