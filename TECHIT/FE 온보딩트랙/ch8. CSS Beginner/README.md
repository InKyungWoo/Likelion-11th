### 1. CSS 적용

- CSS: `Cascading Style Sheets` 폭포수처럼 계단식으로 작동하는 스타일 설정

```html
<link rel="stylesheet" href="./style.css">
```

### 2. CSS 구성(1)

Box-Sizing: 박스에 적용된 사이즈의 기준 정하기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80e529a9-61f1-4cd3-9027-b78b501c61d7/Untitled.png)

- **content-box** → 생각했던 요소의 크기 **+ ⍺** (내용이 차지하는 영역에만 사이즈 적용됨)
    - `universal selecter` 로 전체 적용!! (테두리를 포함하여 사이즈 적용)
        
        ```css
        * { box sizing: border-box; }
        ```
        

### 3. CSS 구성(2)

- 선택자, 속성, 값, 선언, 규칙
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/436276f6-e424-4739-b46c-141521d789e0/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e41b3e5f-9ecb-487d-bd16-78a8773c9261/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8d064d49-bd85-44c8-823b-82e596e60020/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7df3a932-227e-4300-8b17-23093372ecee/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e900ee6f-57f2-4c08-b112-484ebe95559c/Untitled.png)
    
- **CSS 선택자**
    - **요소 전체**에 universal하게 적용 : `* { color: brown; }`
    - **특정 태그 전체**에 적용 : `h2 { color: brown; }`
    - **여러 종류의 태그**에 적용 : `h2, p { color: brown; }`
    - **특정 클래스**에 해당되는 요소에 대해 적용 : `.coding { color: brown; }`
    - **특정 클래스가 명시된 특정 태그**에 대해 적용 : `h2.coding { color: brown; }`
    - **특정 아이디**에 해당되는 요소에 대해 적용 : `#original { color: brown; }`
    - 특정 아이디가 명시된 특정 태그에 대해 적용 : `h2#original { color: brown; }`
    - 부모 요소 내의 특정 자식 요소 : `div p { color: brown; }`

- CSS 주석 : `/* */`

### 4. CSS 특성

### 폭포수(Cascading)

- 같은 태그에 대한 규칙이 있는 경우 마지막으로 작성된 규칙이 적용됨

```css
h1 {color: brown;}
h1 {color: red;}    /* 얘가 적용됨 */
```

### 상속(inheritance)

- 부모 요소의 CSS 규칙을 자식 요소가 상속 받음
- 자식 요소가 CSS 규칙을 가지고 있다면 우선하여 적용

### 우선순위(Specificity)

- CSS 규칙이 서로 충돌할 때 어떤 것을 우선으로 적용할 지

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7aaf97af-7a44-4782-81a3-b83d06f87ed0/Untitled.png)

- html 스타일링 << css 스타일
- 태그로 선택된 요소 << class로 선택된 요소

### 5. Box Model

- `display : inline`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed3ffd52-95d1-46d8-9f96-b992b54966fe/Untitled.png)

- `display : block`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2279301b-7bd5-4590-9891-d2397e184664/Untitled.png)

<aside>
💡 **block은 가지지만 inline은 가지지 못하는 것**

- width, height, margin, padding
- inline은 좌우 margin, padding만 적용 가능
- inline에 적용되는 것처럼 보이는 상하 padding은 레이아웃에 영향을 미치지 못함
</aside>

- `display : inline-block`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/823f2b39-0b6b-4ca5-b0f5-145269c7ade2/Untitled.png)

### Box Model

- Block Box가 가지는 기본 모델

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c1045ee-d03b-49db-a24e-56c3637bb193/Untitled.png)

- `margin` : 테두리로부터 다른 요소와의 거리
    
    ```css
    div {margin: 20px;}       /* *상하좌우 */*
    div {margin: 20px 30px;}  /* *상하, 좌우 -> 속기법! */*
    div {margin: 20px 10px 20px 10px;}  /**위쪽부터 시계방향 */*
    ```
    
    ```css
    /* 속기법 안쓰고 각각 설정 */
    div {
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    } 
    ```
    
- `Border` : 내용을 둘러싼 테두리
    
    ```css
    div {
    border: 6px solid blue; /* *두께, 유형, 색상 */*
    }
    ```
    
    ```css
    div {
    border-width: 6px;
    border-style: solid;
    border-color: blue;
    }
    ```
    
- `Padding` : 내용으로부터 테두리까지의 거리
    - margin과 작성법이 비슷함
    
    ```css
    div {
    padding: 4px
    }
    div {
    padding-top: 20px;
    padding-right: 10px;
    padding-bottom: 20px;
    padding-left: 10px;
    } 
    ```
    

### 6. Box Sizing

→ 박스에 적용된 사이즈의 기준 정하기 (2.CSS 구성 참고)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80e529a9-61f1-4cd3-9027-b78b501c61d7/Untitled.png)

- content-box가 default
    - 생각했던 요소의 크기 **+ ⍺** (내용이 차지하는 영역에만 사이즈 적용됨)
    - 그래서 생각보다 커짐.. 왜곡 → `* { box sizing: border-box; }`

### 7. CSS 단위

- `px` : 스크린을 구성하는 작은 점
    - 절대적인 픽셀보다는 상대적 비율로 설정하는 경우가 많음 → 그래서 `%` 사용
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/858d5b4e-738d-417b-89b8-d70ab9fdef24/Untitled.png)
    
- `em` : 부모 요소의 폰트 크기를 기준으로 함
    - 부모 요소의 크기에 따라 동적으로 상대적 크기가 변함
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de4e4a26-aff4-4087-959c-9e9a93a84b35/Untitled.png)
    

요소간 위계관계, 상위요소 하나하나 정하는거 귀찮고 복잡합..

→ **최상위 요소인 <html>의 폰트 사이즈를 기준으로 크기 설정!** 

- 통일된 기준을 잡기 위해서는 rem 단위 사용 권장

- `rem`(rootem) : 루트 요소의 폰트 크기를 기준으로 함
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90c26be4-8068-4cd2-afdb-a04cd50be875/Untitled.png)
    

- `vw/vh` (view port) : 각 디바이스별 화면의 너비, 높이를 기준으로 배율 설정
    - 내가 보고 있는 브라우저 영역을 꽉 채우는 요소
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4d1f0a5-36c9-42c5-8fa0-da9934c988ba/Untitled.png)
        

### 8. 이미지 다루기

<aside>
🖼️ **img**

- img 태그는 인라인 성격
- 단독으로 사용 ❌  div로 마크업 후 사용
- src로 경로 설정
</aside>

`max-width: 100%;` : 부모 영역에서 벗어나지 않도록 이미지의 너비 상한선을 100%로 설정

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/54865b27-01d1-48c3-bb17-6cd93cdccb1d/Untitled.png)

`obtect-fit: cover;` : 이미지를 부모 요소의 가운데로 맞춤. 영역의 크기 만큼 확대/축소해서 채우기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/872d3ff6-86ef-4a18-90e2-30674443b07c/Untitled.png)

`obtect-fit: contain;` : 이미지의 비율을 유지하면서 부모 요소를 채움

![스크린샷 2023-05-22 오후 11.07.34.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/feba626a-57f5-42cc-9b53-1470799f1289/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-22_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.07.34.png)

`obtect-fit: fill;` : 이미지의 비율을 유지하지 않고 부모 요소의 크기에 맞게 변경하여 채움

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28ccccbc-f8b4-4119-ac7c-e94dd460dbe4/Untitled.png)

### 9. Overflow

- 브라우저 입장에서 요소가 넘치는 것은 에러가 아님

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7cbdbcca-62e2-473d-842c-996e71b1b5dc/Untitled.png)

- `overflow: hidden`
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/096685d4-a7ba-40b9-afba-c7123a81897b/Untitled.png)
    
- `overflow: scroll`
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/27f351b6-60cc-496b-8c6b-cf52ee281171/Untitled.png)
    
    - 기본적으로 x, y 축 모두 스크롤이 생김 (근데 안넘쳐도 무조건 생김)
    - overflow-y: scroll; 로 축을 지정해서 설정 가능

- `overflow: auto`
    - 넘치치 않으면 스크롤 만들지마.
    - 가로가 넘치면 가로 스크롤만 생성 / 세로도 마찬가지

### 10. 폰트 꾸미기

- `color` : 색상
    - 보통 Hex color 사용 (포토샵에서 색 따오던 그거)
- `font-size` : 글자 크기
- `font-style: italic;` : 이탤릭
- `font-weight: bold` : 폰트 굵기
    - 100~900까지 굵기 정도 다양 (400-normal, 700-bold)
- `text-decoration: underline;` : 밑줄

```css
/* a태그는 <u>가 디폴트 */
a {
	text-decoration: none;   /* 밑줄 표시 제거 */
}    
a:link {
	color: black;            /* 클릭한 적이 없는 링크 */
}    
a:visited {
	color: black;            /* 방문했던 링크 */
}   
```

### 11. 테두리 꾸미기

- 테두리는 별도 선언이 없으면 none → 보이지 않음
    - `border-width` : 굵기
    - `border-style` : 실선 점선 등 (solid..
    - `border-color` : 색상
        - 속기 방식 : `border: 2px solid blue;` - 두께, 스타일, 색 한번에 설정
    - `border-radius` : 반경 값을 넣어 모서리 둥글게

### 12. 배경 이미지 설정

- `backgroud-color` : 배경 색 지정
- 배경 이미지
    - `background-image:  url`  → 바둑판 처럼 격자로 채워짐
    - `background-repeat: no-repeat`
    - `background-size: contain` : 이미지가 온전히 표시되는 것이 우선
    - `background-size: cover` : 요소의 배경을 모두 덮는 것이 우선
    - `background-position: center` : 이미지를 가운데로

<aside>
💡 **이미지를 레이아웃에 맞는 해상도로 크롭해서 사용하는 것이 가장 best!!**

</aside>

### 13. 요소 정렬하기

- `margin: 0 auto;`
    - 상하의 margin은 0, 좌우는 동일하게 auto로 맞춤 → 가운데로 맞춤!
    - 부모 block 요소의 width를 기준으로 자동으로 margin 계산
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/16fc8daa-2aff-4bed-ac7f-98ee52101643/Untitled.png)
    
- `text-align: center;`
    - 블록 요소 내의 인라인 요소를 가운데 정렬
    - 부모 요소가 block이고 정렬하려는 자식 요소가 inline일 때
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db10de9f-8816-4338-bb38-41d15bf19c6b/Untitled.png)