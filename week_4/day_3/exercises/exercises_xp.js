//------------ex1-----------------
const express = require("express");
const api = express();

api.use(express.json());

let articles = [
  { id: 1, title: "First Post", content: "This is my first blog post." },
  { id: 2, title: "Second Post", content: "This is my second blog post." },
];

api.get("/posts", (_req, res) => {
  res.json(articles);
});

api.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const hit = articles.find((a) => a.id === id);

  if (!hit) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(hit);
});

api.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const nextId = articles.length ? articles[articles.length - 1].id + 1 : 1;
  const draft = { id: nextId, title, content };

  articles.push(draft);
  res.status(201).json(draft);
});

api.put("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const hit = articles.find((a) => a.id === id);

  if (!hit) {
    return res.status(404).json({ error: "Post not found" });
  }

  const { title, content } = req.body;
  if (title) hit.title = title;
  if (content) hit.content = content;

  res.json(hit);
});

api.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = articles.findIndex((a) => a.id === id);

  if (idx === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const [removed] = articles.splice(idx, 1);
  res.json({ message: "Post deleted", post: removed });
});

api.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

api.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error" });
});

const blogPort = 3000;
api.listen(blogPort, () => {
  console.log(`Server is running on http://localhost:${blogPort}`);
});

//------------ex2-----------------

const express = require("express");
const booksApp = express();

booksApp.use(express.json());

let library = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 },
];

booksApp.get("/api/books", (_req, res) => {
  res.json(library);
});

booksApp.get("/api/books/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId, 10);
  const hit = library.find((b) => b.id === id);

  if (!hit) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(hit);
});

booksApp.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({
      message: "Title, author, and publishedYear are required",
    });
  }

  const nextId = library.length ? library[library.length - 1].id + 1 : 1;
  const record = { id: nextId, title, author, publishedYear };

  library.push(record);
  res.status(201).json(record);
});

const booksPort = 5000;
booksApp.listen(booksPort, () => {
  console.log(`Book API server running at http://localhost:${booksPort}`);
});

//------------ex3-----------------
const express = require("express");
const { fetchPosts } = require("./data/dataService");

const feedApp = express();
const feedPort = 5000;

feedApp.use(express.json());

feedApp.get("/posts", async (_req, res) => {
  try {
    const remotePosts = await fetchPosts();
    console.log("Successfully retrieved posts from JSONPlaceholder");
    res.json(remotePosts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

feedApp.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

feedApp.listen(feedPort, () => {
  console.log(`Server is running at http://localhost:${feedPort}`);
});

// data/dataService.js (implement alongside):
// const axios = require("axios");
// async function fetchPosts() {
//   const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return data;
// }
// module.exports = { fetchPosts };

//------------ex4-----------------

//------------ex5-----------------

//------------ex6-----------------
