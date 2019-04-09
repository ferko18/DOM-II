// Your code goes here
//Mouseover event 

let h2selector = document.querySelector('.intro h2')


h2selector.addEventListener('mouseover', cbfun1 )

function cbfun1(event){
    event.target.style.color='blue'
}

//mousemove

const containerselector = document.querySelector('html');

containerselector.addEventListener("mousemove", cbfun2);

function cbfun2(event){
document.body.style.backgroundColor = "rgb("+event.offsetX+","+event.offsetX+", 100)";
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



