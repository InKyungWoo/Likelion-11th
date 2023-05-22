### 1. Float

- 떠오르다. 자식이 부모로부터. → margin을 없애버리다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ad16882-b845-4839-879f-df936074821f/Untitled.png)
    
    - 자식 요소의 width 값 자체가 바뀌는게 아니라, 부모 요소의 width 값 만큼 margin이 생기는 것 !

- float1이 붕 뜨면 margin 값을 버리고, 붕 뜨게 되니 아래에 있던 float2가 위에 빈 공간을 채움

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc2dcb34-6326-41a8-845a-15e0abad4b74/Untitled.png)

- 가로배치가 되지 않고 겹쳐짐
    - 가로배치 하고 싶은 요소들에 전부 float 선언 → 가로 배열 가능

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e95e24a-fa18-4fce-bca1-03bd6765b65a/Untitled.png)

### 2. Clear

- 페이지 레이아웃을 짜다 보면 페이지가 범람
    - float로 없어진 margin 영역에 대응, 올라가지 않도록 처리

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e87c238c-835e-4425-8a0b-607fa0a19e36/Untitled.png)

### Clearfix

- clear라는 속성으로 Layout을 바로잡는 기법
    - 밑의 내용들이 범람하지 않도록 막아주는 역할

```css
(범람을 막고 싶은 요소, 아래에선 header)::after {
	content: " ";
	display: block;
	clear: both;
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76ce6985-0c7b-4ba3-8f66-967c027f54ac/Untitled.png)

### 3. Flex

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c11c72aa-1972-43c8-90f2-333f68bdc4e3/Untitled.png)

- flex가 없었을 때는 이렇게 가로 배열했음

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/303238c9-3ae3-4dcf-a20c-b8cdb3a2c1cf/Untitled.png)

### 4. Position

- **static**
    - 모든 요소의 디폴트 값
    - 생성된 원래 위치

- **relative**
    - 원래 위치를 기준으로 요소를 움직일 때 사용
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c643ccb8-e0e9-4eee-9cb1-a7b4f88b1ac3/Untitled.png)
    

- **abolute**
    - position이 static이 아닌 가장 가까운 부모를 기준으로 함
    - 없다면, body를 기준으로 위치를 움직임

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/74b9ec94-f0c2-469b-b889-d732aac7eeed/Untitled.png)

- **fixed**
    - 브라우저 창을 기준으로 고정된 위치

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78923c2e-7721-4f48-9b84-9d9cc2924bac/Untitled.png)

- **sticky**
    - 스크롤로 특정 위치에 도달하면 고정

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ba485e8-da4b-4215-87bc-c26cefaae92d/Untitled.png)

### 5. Grid

- 열이 12개이고 행이 무한한 바둑판
- 페이지 레이아웃의 가이드 라인

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/858a57e4-ca9c-4741-9cda-8d9fb4ed0311/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a004768-fe4e-4246-9de1-d2f3afb83883/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc3fdbf6-24b1-4fe5-948f-9d3991bb4692/Untitled.png)