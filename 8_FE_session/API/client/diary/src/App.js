import axios from 'axios';
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [diaryList, setDiaryList] = useState(null);
  const [formValues, setFormValues] = useState({ title: "", content: "", mood: "" });
  
  useEffect(() => {
    fetchDiary();
  }, []);

  // GET 메서드
  const fetchDiary = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/diary");
      //console.log(res.data);
      setDiaryList(res.data.map(diary => ({ ...diary, mood: diary.mood || "" }))); 
    } catch (error) {
      console.error("Error", error);
    }
  };
  
  

  // POST 메서드
    const onSubmitHandler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    // 기존 코드: const mood = formValues.mood; 
    const currentDate = new Date().toISOString().split('T')[0];
  
    await axios.post("http://localhost:4000/api/diary", { ...formValues, title, content, date: currentDate });
    fetchDiary();
  
    // 일기 추가 후 내용 초기화 되도록!
    setFormValues({ title: "", content: "" });
  };
  

  // DELETE 메서드
  const onDeleteHandler = async (id) => {
    await axios.delete(`http://localhost:4000/api/diary/${id}`);
    fetchDiary();
  };

  // 오늘의 기분 선택 (중복 방지 추가)
  const onMoodChange = (selectedMood) => {
    if (formValues.mood !== selectedMood) {
      setFormValues({ ...formValues, mood: selectedMood });
    }
  };
  
return (
  <>
    <Container>
      <Title>📖 Diary ✏️</Title>
      <Form onSubmit={onSubmitHandler}>
        <MoodSelector>
            <label>
              <input
                type="checkbox"
                value="신나~!~!"
                checked={formValues.mood === "신나~!~!"}
                onChange={() => onMoodChange("신나~!~!")}
              />
              🥳
            </label>
            <label>
              <input
                type="checkbox"
                value="햅피~!"
                checked={formValues.mood === "햅피~!"}
                onChange={() => onMoodChange("햅피~!")}
              />
              🥰
            </label>
            <label>
              <input
                type="checkbox"
                value="쏘쏘"
                checked={formValues.mood === "쏘쏘"}
                onChange={() => onMoodChange("쏘쏘")}
              />
              😶
            </label>
            <label>
              <input
                type="checkbox"
                value="하..."
                checked={formValues.mood === "하..."}
                onChange={() => onMoodChange("하...")}
              />
              😰
            </label>
            <label>
              <input
                type="checkbox"
                value="딥빡"
                checked={formValues.mood === "딥빡"}
                onChange={() => onMoodChange("딥빡")}
              />
              🤬
            </label>
          </MoodSelector>
          <Input name="title" placeholder="제목" value={formValues.title} onChange={(e) => setFormValues({ ...formValues, title: e.target.value })} />
        <TextArea name="content" placeholder="내용" value={formValues.content} onChange={(e) => setFormValues({ ...formValues, content: e.target.value })} />
        <SubmitButton type="submit">Write</SubmitButton>
      </Form>
      {diaryList && (
          <DiaryList>
            {diaryList.map((diary) => (
              <DiaryItem key={diary.id}>
                <div>
                  <DiaryTitle>{diary.title}</DiaryTitle>
                  <DiaryContent>{diary.content}</DiaryContent>
                  <DiaryDate>{diary.date}</DiaryDate>
                  <DiaryMood>Mood: {diary.mood}</DiaryMood> {/* 추가된 부분 */}
                </div>
                <DeleteButton onClick={() => onDeleteHandler(diary.id)}>
                  Delete
                </DeleteButton>
              </DiaryItem>
            ))}
          </DiaryList>
        )}
      <Alert>그만 줄여요!</Alert>
    </Container>
  </>
);
}

export default App;

const Container = styled.div`
display: flex;
width: 100vw;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 20px;
//margin-top: 30px;
background-color: #efe5d8;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #6b5f4e;
  margin-bottom: 20px;
  @media only screen and (max-width: 350px) {
    color: pink;
  }
`;

const Form = styled.form`
width: 60%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 20px;
`;

const Input = styled.input`
width: 100%;
padding: 10px;
margin-bottom: 10px;
font-size: 16px;
`;

const TextArea = styled.textarea`
width: 100%;
padding: 10px;
margin-bottom: 10px;
font-size: 16px;
`;

const MoodSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    cursor: pointer;

    input {
      margin-bottom: 5px;
    }
  }
`;

const SubmitButton = styled.button`
padding: 10px;
width: 50%;
background-color: #67744e;
color: #ffffff;
border: none;
border-radius: 10px;
cursor: pointer;

&:hover {
  background-color: #537755;
}
`;

const DiaryList = styled.ul`
list-style: none;
width: 60%;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
background-color: white;
`;

const DiaryItem = styled.li`
border-bottom: 1px solid #eee;
padding: 20px 0;
display: flex;
justify-content: space-between;
align-items: center;
`;

const DiaryMood = styled.p`
  font-size: 14px;
  color: #a9945b;
`;

const DiaryTitle = styled.h3`
font-size: 18px;
margin-bottom: 10px;
color: #8f6f45;
`;

const DiaryContent = styled.p`
font-size: 16px;
color: #555;
`;

const DiaryDate = styled.p`
  font-size: 14px;
  color: #888;
`;

const DeleteButton = styled.button`
  padding: 10px;
  margin-right: 2rem;
  background-color: #b85a5a;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #944545;
  }
`;

const Alert = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: red;
  display: none;
  @media only screen and (max-width: 350px) {
    display: flex;
  }
`;