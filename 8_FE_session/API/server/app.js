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
    title: "오늘은 리액트 세션~",
    content: "리액트는 왜 이렇게 재밌을까?",
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
app.post("/api/diary", (req, res) => {
    const { title, content } = req.body;
    diaryList.push({
      id: id++,
      title,
      content,
    });
    return res.send("success");
  });

// 포트번호 변경
app.listen(4000, () => {
    console.log("server start!")
})