//------------ex1-----------------
// server.js
const express = require("express");
const path = require("path");

const server = express();
const listenPort = 5000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));

const emojiBank = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🎉", name: "Party" },
  { emoji: "💡", name: "Idea" },
  { emoji: "🍎", name: "Apple" },
];

let scoreboard = [];

function buildRound() {
  const answerIdx = Math.floor(Math.random() * emojiBank.length);
  const answer = emojiBank[answerIdx];

  const choices = [answer.name];
  while (choices.length < 3) {
    const pick = emojiBank[Math.floor(Math.random() * emojiBank.length)].name;
    if (!choices.includes(pick)) choices.push(pick);
  }

  choices.sort(() => Math.random() - 0.5);

  return { emoji: answer.emoji, correct: answer.name, options: choices };
}

server.get("/api/question", (_req, res) => {
  res.json(buildRound());
});

server.post("/api/answer", (req, res) => {
  const { selected, correct, player } = req.body;
  const isCorrect = selected === correct;
  const score = isCorrect ? 1 : 0;

  scoreboard.push({ player: player || "Anonymous", score });
  scoreboard.sort((a, b) => b.score - a.score);
  const topScores = scoreboard.slice(0, 5);

  res.json({ correct: isCorrect, score, leaderboard: topScores });
});

server.listen(listenPort, () =>
  console.log(`Emoji Game running at http://localhost:${listenPort}`)
);

// script.js
let totalScore = 0;
let activeRound = null;

const glyphSlot = document.getElementById("emoji");
const choiceHost = document.getElementById("options");
const statusLine = document.getElementById("feedback");
const scoreSlot = document.getElementById("score");
const ranksHost = document.getElementById("leaderboard");

async function fetchNextRound() {
  statusLine.textContent = "";
  const response = await fetch("/api/question");
  activeRound = await response.json();

  glyphSlot.textContent = activeRound.emoji;
  choiceHost.innerHTML = "";

  activeRound.options.forEach((choice) => {
    const control = document.createElement("button");
    control.textContent = choice;
    control.className = "option";
    control.onclick = () => sendPick(choice);
    choiceHost.appendChild(control);
  });
}

async function sendPick(selected) {
  const response = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      selected,
      correct: activeRound.correct,
      player: "Player1",
    }),
  });

  const payload = await response.json();

  statusLine.textContent = payload.correct
    ? "Correct!"
    : `Wrong! Correct: ${activeRound.correct}`;
  if (payload.correct) totalScore++;
  scoreSlot.textContent = `Score: ${totalScore}`;

  Array.from(choiceHost.children).forEach((control) => {
    if (control.textContent === activeRound.correct) control.classList.add("correct");
    if (!payload.correct && control.textContent === selected) control.classList.add("wrong");
    control.disabled = true;
  });

  ranksHost.innerHTML = "";
  payload.leaderboard.forEach((row) => {
    const line = document.createElement("li");
    line.textContent = `${row.player}: ${row.score}`;
    ranksHost.appendChild(line);
  });

  setTimeout(fetchNextRound, 1500);
}

fetchNextRound();

//------------ex2-----------------

//------------ex3-----------------

//------------ex4-----------------

//------------ex5-----------------

//------------ex6-----------------
