const timeDiv = document.getElementById("time");

function getTime() {
  let now = new Date();
  let hour = padZero(now.getHours());
  let minute = padZero(now.getMinutes());
  let second = padZero(now.getSeconds());

  var dd = now.getDate();
	var mm = now.getMonth()+1; 
	var yyyy = now.getFullYear();

  timeDiv.textContent = `${yyyy}년 ${mm}월 ${dd}일 \n ${hour}시 ${minute}분 ${second}초`;

	setInterval(getTime, 1000);
}

function padZero(data) {
  return data < 10 ? `0${data}` : data;
}

getTime();