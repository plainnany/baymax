var wrap = document.createElement('div');
wrap.className='wrap';
document.body.appendChild(wrap);

var head, body, chest, belly, foot,eye1,eye2;
var num=0;
var timer = null;
var arr=[
  function(){  
     head = document.createElement('div');
     head.className='head';
     wrap.appendChild(head);
    
  },
  function(){
    
    eye1=document.createElement('div');
    eye1.className='eye1';
    head.appendChild(eye1);
  },
  function(){
    eye2=document.createElement('div');
    eye2.className='eye2';
    head.appendChild(eye2);
  },
  function(){
    
    var line=document.createElement('div');
    line.className='line';
    head.appendChild(line);
    
  },
  
  function(){
    body=document.createElement('div');
    body.className='body';
    wrap.appendChild(body);
    chest=document.createElement('div');
    chest.className='chest';
    body.appendChild(chest);
  },
  function(){
    var heart=document.createElement('div');
    heart.className='heart';
    chest.appendChild(heart);
  },
  function(){
    belly=document.createElement('div');
    belly.className='belly';
    body.appendChild(belly);
    var cover=document.createElement('div');
    cover.className='cover';
    belly.appendChild(cover);
  },
  function(){
    var leftArm=document.createElement('div');
    leftArm.className='left-arm';
    body.appendChild(leftArm)
  },
  function(){
    var rightArm=document.createElement('div');
    rightArm.className='right-arm';
    body.appendChild(rightArm)
  },
  function(){
    foot=document.createElement('div');
    foot.className='foot';
    wrap.appendChild(foot);
   
    var leftFoot=document.createElement('div');
    leftFoot.className='left-foot';
    foot.appendChild(leftFoot)
  },
  function(){
    var rightFoot=document.createElement('div');
    rightFoot.className='right-foot';
    foot.appendChild(rightFoot);
  }
   
];

document.getElementsByTagName('button')[0].onclick=function(){
  var fn=arr.shift();
  fn && fn.call(); 
  if(fn===undefined){
    alert("hello Hiro~");
    clearTimeout(timer);
    move();

  }
 
}
function move(){
  var x = num*9;
  num=num+10;
  if(num>10){
    num=0;
  }
  eye1.style.transform = 'rotateX('+ x +'deg)';
  eye2.style.transform = 'rotateX('+ x +'deg)';
  timer = setTimeout(move,1000);
}



