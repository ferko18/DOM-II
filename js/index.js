// Your code goes here
//Mouseover event 

let h2selector = document.querySelector('.intro h2')


h2selector.addEventListener('mouseover', cbfun1 )

function cbfun1(event){
    event.target.style.color='blue'
}

//mousemove

const containerselector = document.querySelector('body');

containerselector.addEventListener("mousemove", cbfun2);

function cbfun2(event){
document.body.style.backgroundColor = "rgb("+event.offsetX+","+event.offsetX+", 255)";
}

//double click event , delete every image when clicked

const picselector = document.images;

for ( var i=0; i<picselector.length; i++)
{
    picselector[i].addEventListener('dblclick', cbfun3)
  function cbfun3 (event){
      event.target.style.display='none'
  }
}

//keydown , when spacebar  is pressed , the navar item infocus will turn red

const headerlector = document.querySelectorAll('nav a')
for (var i=0; i<headerlector.length;i++)
{
    headerlector[i].addEventListener('keydown', cbfun4)
    function cbfun4 (event){
       if (event.keyCode===32)
       {
event.target.style.color='red'
       }
}
}

//mouseenter

for ( var i=0; i<picselector.length; i++)
{
    picselector[i].addEventListener('mouseenter', cbfun5)
  function cbfun5 (event){
      event.target.style.opacity='0.3'
  }
}

//mouseleave
for ( var i=0; i<picselector.length; i++)
{
    picselector[i].addEventListener('mouseleave', cbfun6)
  function cbfun6 (event){
      event.target.style.opacity='1'
  }
}

 //prevent spacebar from scrolling down 

 window.addEventListener('keydown', cbfun7)
 
 function cbfun7(event) { 
     if(event.keyCode===32)
     event.preventDefault();
 }

//resize event listner
const navcont = document.querySelector('nav')
navcont.addEventListener("resize", cbfun8)


function cbfun8 (event){
      event.target.style.backgroundColor ='green';
}

//prevent event propagation
const introimg = document.querySelector('.intro img')
introimg.addEventListener("mousemove", cbfun10);

function cbfun10 (event)
{
    event.stopPropagation();
}
// nav item prevent default

const navitem = document.querySelector('.nav a');
navitem.addEventListener('click', cbfun9)

function cbfun9 (event){
    event.preventDefault();
}