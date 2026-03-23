//------------ex1-----------------

const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  handle: { type: String, required: true },
  mail: { type: String, unique: true }
});
const Account = mongoose.model('Account', accountSchema);

const entrySchema = new mongoose.Schema({
  headline: { type: String, required: true },
  details: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  notes: [{
    remark: String,
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account'
    },
    madeAt: { type: Date, default: Date.now }
  }]
});
const Entry = mongoose.model('Entry', entrySchema);

const fillSampleData = async () => {
  await Account.deleteMany({});
  await Entry.deleteMany({});

  const userA = await Account.create({ handle: 'SamUser', mail: 'sam@demo.com' });
  const userB = await Account.create({ handle: 'AlexDev', mail: 'alex@demo.com' });

  await Entry.create({
    headline: "MongoDB Links",
    details: "Learning about document population in Mongoose...",
    creator: userA._id,
    notes: [
      { remark: "Very informative!", writer: userB._id }
    ]
  });
};

const showAllEntries = async () => {
  const entries = await Entry.find()
    .populate('creator', 'handle')
    .populate('notes.writer', 'handle');

  console.log(JSON.stringify(entries, null, 2));
};

const start = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/blogPlatform');

  await fillSampleData();
  await showAllEntries();

  await mongoose.disconnect();
};

start();

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection Error:', err));

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model('Task', taskSchema);

const createTask = async () => {
  try {
    const newTask = await Task.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for the MongoDB bootcamp"
    });
    console.log("Task Created:", newTask);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("Current Tasks:", tasks);
};

const completeTask = async (taskId) => {
  await Task.findByIdAndUpdate(taskId, { status: 'completed' });
  console.log("Task marked as completed!");
};

const runChallenge = async () => {
  try {
    await Task.deleteMany();

    try {
      await Task.create({
        description: "This task has no title"
      });
    } catch (err) {
      console.log("Missing Title Error:", err.message);
    }

    try {
      await Task.create({
        title: "Invalid Status Task",
        status: "in-progress"
      });
    } catch (err) {
      console.log("Invalid Status Error:", err.message);
    }

    await createTask();
    await getAllTasks();

  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

runChallenge();

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true }
});
const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{
    text: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: { type: Date, default: Date.now }
  }]
});
const Post = mongoose.model('Post', postSchema);

const seedData = async () => {
  await User.deleteMany({});
  await Post.deleteMany({});

  const lina = await User.create({ username: 'LinaDev', email: 'lina@test.com' });
  const adam = await User.create({ username: 'AdamCode', email: 'adam@test.com' });

  await Post.create({
    title: "MongoDB Relationships",
    content: "Today we learned about population...",
    author: lina._id,
    comments: [
      { text: "Great post!", author: adam._id }
    ]
  });
};

const getFullBlogFeed = async () => {
  const feed = await Post.find()
    .populate('author', 'username')
    .populate('comments.author', 'username');

  console.log(JSON.stringify(feed, null, 2));
};

const run = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/blogPlatform');

  await seedData();
  await getFullBlogFeed();

  await mongoose.disconnect();
};

run();


//------------ex2-----------------



//------------ex3-----------------




//------------ex4-----------------



//------------ex5-----------------



//------------ex6-----------------


