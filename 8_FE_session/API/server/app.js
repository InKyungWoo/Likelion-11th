// server/app.js

const express = require('express')
const app = express()
// cors 라이브러리 추가
const cors = require('cors');
app.use(cors());

// body-parser
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 2;
const diaryList = [
  {
    id: 1,
    title: "Frontend",
    content: "session 과제 끄읏 ✨",
    date: "2023-11-20",
    mood: "햅피~!",
  },
];

app.get('/', function (req, res) {
  res.send('Hello World')
})

// GET 요청 API
app.get("/api/diary", function (req, res) {
  res.json(diaryList);
});

// POST 요청 API
// date, mood 추가
app.post("/api/diary", (req, res) => {
  const { title, content, date, mood } = req.body;
  console.log("Received data:", { title, content, date, mood });
  
  diaryList.push({
    id: id++,
    title,
    content,
    date,
    mood,
  });

  return res.send({ success: true, diary: diaryList[diaryList.length - 1] });
});
// DELETE 요청 API
app.delete("/api/diary/:id", (req, res) => {
  const targetId = parseInt(req.params.id);
  const index = diaryList.findIndex((diary) => diary.id === targetId);

  if (index !== -1) {
    diaryList.splice(index, 1);
    return res.send("success");
  } else {
    return res.status(404).send("Not Found");
  }
});

// 포트번호 변경
app.listen(4000, () => {
    console.log("server start!")
})