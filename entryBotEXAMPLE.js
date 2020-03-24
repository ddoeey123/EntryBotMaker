var lastID="";
var text;
var id;
var botName;
var like;
var user;
var created;
var ram;
var admin = new Array("ddoeey123","ddoeeyt","ddoeeybot123");
var ad;

console.log("——————————◼made by ddoeey123◼——————————");
console.log("--- 또이봇 이 실행 됩니다 ---");
console.log("--- !또이봇 게시글로 호출 하세요 ---");
alert("BOT - 실행됨");
function comment(a){
  $.ajax({
    url:"/api/comment",
    dataType:"json",
    type:"POST",
    data:{
      content: "["+botName+"] "+a,
      target: id,
      targetSubject: "discuss",
      targetType: "individual"
    }
  });
}
function write(a,b,c){
  $.ajax({
    url:"./api/discuss/",
    type:"POST",
    data:{
      content:a,
      title:b,
      groupNotice:false,
      images:[],
      category:c
    }
  });
}
Math.randomInterger = (max,min) => {
　 floor(Math.random() * (max - min)) + min;
}
setInterval(() => {
  $.get('https://playentry.org/api/discuss/find?category=free', d => {
    text=d.data[0].title;
    id=d.data[0]._id;
    like=d.data[0].likesLength;
    user=d.data[0].owner;
    created=d.data[0].created;
  })
  if(id != lastID){
    lastID=id;
    run();
  }
},220);
function run(){
  //----------------------여기서부터 코드 시작------------------------------------------------------------------
  botName="또이봇";
  for(var i = 0;i<admin.length;i++){
    if (admin[i] == 
  if(text=="!또이봇" ){
   comment("왜");
    
     else if(ram == 2){
    comment("ㅎㅇ");
    }
     else if(ram == 3){
    comment("또이봇 입니다!");
    }
  }
  //예제코드
  //write("제목","내용",free);
  //comment("내용");
  //text 글 제목
  //id 글 아이디
  //like 글 좋아요 수
  //user 글쓴이
  //created 만들어진 날짜 시간
}
