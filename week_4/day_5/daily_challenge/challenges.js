//------------ex1-----------------

db.users.insertOne({
  username: "devMira",
  bio: "Full-stack developer passionate about NoSQL.",
  socialLinks: {
    github: "github.com/devMira",
    linkedin: "linkedin.com/in/devMira",
    twitter: "twitter.com/devMira",
  },
});

db.posts.insertOne({
  title: "Getting Started With DevBlog",
  body: "Welcome to my first technical post...",
  authorId: ObjectId("69a5f7732bb8a39e61711861"),
  tags: ["MongoDB", "Backend", "Architecture"],
  comments: [],
});

db.posts.find();

// sample output shape
// {
//   _id: ObjectId('69a5f8a62bb8a39e61711862'),
//   title: 'Getting Started With DevBlog',
//   body: 'Welcome to my first technical post...',
//   authorId: ObjectId('69a5f7732bb8a39e61711861'),
//   tags: [ 'MongoDB', 'Backend', 'Architecture' ],
//   comments: []
// }

//------------ex2-----------------

//------------ex3-----------------

//------------ex4-----------------

//------------ex5-----------------

//------------ex6-----------------
