### 1. HTML 구성

`Hyper Text Markup Language` : 태그를 통해 텍스트에 생명을 불어넣는 것

![스크린샷 2023-05-15 오후 10 10 25](https://github.com/InKyungWoo/Likelion-11th/assets/102344718/ea37a62d-10dd-4991-a275-ebb792dbebd7)


- markup: 태그를 붙이는 작업
- 요소(element) : `<여는 태그>` 내용 `</닫는태그>`

![스크린샷 2023-05-15 오후 10 11 53](https://github.com/InKyungWoo/Likelion-11th/assets/102344718/afb69615-47ad-49f0-8360-ce3b9fec2680)


- `Attribute`: 속성
    - 속성이름=”속성값”
    - 한 태그 안에 여러개의 속성을 가지면 띄어쓰기로 구분해주면 됨)

![스크린샷 2023-05-15 오후 10 13 46](https://github.com/InKyungWoo/Likelion-11th/assets/102344718/d3614d04-af19-4bf5-af04-886af64e5679)


- 주석 단축키: `cmd+/`
    - html 문서에 주석이 모두 포함되기 때문에 개인정보 조심!


> 🌐 `Boilerplate` : **문서 작성 시 기본적인 구조와 내용을 갖춘 항상 필요한 코드**



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

- HTML을 구성하는 2개의 축 = `<head>` , `<body>`

<br>

### 2. HTML <head>


> ✔️ HTML 문서에 대한 설정 정보


`<!DOCTYPE html>` : html 문서이다

`<html lang="ko">` : 속성 lang = 이 언어로 작성되었다

`<head></head>` : 브라우저 화면에 나타나지 않고 웹문서의 속성, 인코딩 방식, 외부 리소스를 로드하는 설정 역할

`<meta charset="UTF-8">` : 전세계 모든 문자를 지원하는 인코딩 방식

`<meta http-equiv="X-UA-Compatible" content="IE=edge">` : 브라우저 호환성을 설정하는 부분

`<meta name="viewport" content="width=device-width, initial-scale=1.0">` : 브라우저 너비를 설정하는 메타태그

<br>
    
### 3. **블록 요소와 인라인 요소**


> 📎 **Block Element :** 블록 단위로 영역을 나누는 요소



- 가로폭 전체를 차지하며, 줄바꿈이 일어나므로 수직으로 쌓임
- `<div>`, `<h1>`, `<p>`, `<ul>`, `<li>`, `<table>`, `<header>`, `<nav>`, `<section>` 등


> 📎 **Inline Element :** 인라인 단위로 영역을 나누는 요소

- 컨텐츠의 너비만 차지하며, 줄바꿈이 일어나지 않으므로 수평으로 쌓임
- `<a>`, `<span>`, `<img>`, `<input>`, `<button>`, `<label>`, `<strong>`, `<em>` 등

![스크린샷 2023-05-15 오후 10 30 35](https://github.com/InKyungWoo/Likelion-11th/assets/102344718/63361994-ce5f-4bce-bd6c-8028d6a3e34a)

<br>
    
### 4. **HTML <body>**

- `<h1>` - heading
    - 글씨를 키우려는 목적으로 사용 ✖️
- `<p>` - paragraph
- `<br>` - line break (줄바꿈), 닫는 태그 없음
- `<ol>`, `<ul>`, `<li>` - list
    - `<ol>` : 순서를 매기는 태그(ordered list)
    - `<ul>` : 순서를 매기지 않는 태그(unordered list)
    - `<li>`는 <ol>태그나 <ul>태그의 안에 씀.
- `<a>` - anchor : 다른 페이지로 링크를 거는 태그 (단독으로는 잘 안쓰임)
    - <a href=”연결할 링크”> </a>
    - 새 창에서 열고 싶다면 `target=”_blank”` 속성을 추가하면 됨.
- `<span>` - 텍스트 중 일부만 선택해서 변경할 때 사용, 단독으로 특별한 의미는 없음
    - 텍스트의 일부, **문자열 단위**
- `<div>` - 여러개 요소들을 묶어서 그룹화하는 역
    - 여러 태그들 묶음, **html 요소 단위**

    <br>
    
### 5. **HTML 실습**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>멋쟁이사자처럼 :)</title>
</head>
<body>
  
  <!-- 표제 -->
  <h1>모두를 위한 코딩 강의 - TECHIT</h1>

  <!-- 전체 영역 설정 -->
  <div>
  <!-- 부제 -->
  <h2>멋쟁이사자처럼 스쿨</h2>

  <p>멋쟁이사자처럼 스쿨이<br>여러분을 환영합니다</p>

  <!-- <p>비밀비밀비밀 브라우저에서는 안보여도 코드에 다 보임</p> -->

  <ol>
    <li>
      <a href="https://techit.education/school/kdt-frontend-7th">
        프론트엔드 스쿨
      </a>
    </li>
    <li>
      <a href="https://techit.education/school/kdt-backend-5th"
          target="_blank"
      >
        백엔드 스쿨
      </a>
    </li>
    <li>
      <a href="#">
        블록체인 스쿨
      </a>
    </li>
  </ol>
  </div> 

</body>
</html>
```

> vscode editor의 기능 - 배치 꼬였을 때 우클릭 > `format document`(문서서식) / `shift+alt+F`
