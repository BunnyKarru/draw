let canvas_width = 900
let canvas_height = 650

const drawingBoard = document.getElementById('drawBoard');
const context = drawingBoard.getContext("2d");
drawingBoard.width = canvas_width;
drawingBoard.height = canvas_height;


let x = 0;
let y = 0;
let isDrawing = false ;
let coooo ="black";
let lineWidth = 2 ;


drawingBoard.addEventListener("mousedown" , (e)=>{

    x=e.offsetX;
    y=e.offsetY;
    isDrawing = true ;

})
drawingBoard.addEventListener("touchstart" , (e)=>{
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
    isDrawing = true ;

})
drawingBoard.addEventListener("mousemove" , (e)=>{
    if(isDrawing)
    {

        draw(context,x,y,e.offsetX,e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
})
drawingBoard.addEventListener("touchmove" , (e)=>{
    if(isDrawing)
    {

        draw(context,x,y,e.touches[0].clientX, e.touches[0].clientY);
       
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;

    }
})
window.addEventListener("mouseup",(e)=>{
    isDrawing = false ;
})
window.addEventListener("touchend",(e)=>{
    isDrawing = false ;
})
let draw = (context , x1 , y1 , x2 ,y2)=>
{

    context.beginPath();
    context.strokeStyle = coooo;
    context.lineWidth = lineWidth ;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}

const color = document.getElementById('color')
color.addEventListener("input",(e)=>{
    coooo = e.target.value;
    
})

const eraser = document.getElementById('eraser')
eraser.addEventListener("click",(e)=>{
    coooo = "aliceblue";
    
})

const bar = document.getElementById('range')
    bar.addEventListener("input",(e)=>{
        lineWidth = e.target.value ;

    })
    function myFunction(x) {
        if (x.matches) { 
            canvas_width = document.documentElement.clientWidth * 0.98
            
            canvas_height = document.documentElement.clientHeight * 0.98
            // If media query matches


          
        } else {
            canvas_width = 900
            canvas_height = 650
        }
      }

  let media = window.matchMedia("(max-width: 1000px)")

  myFunction(media);

// Attach listener function on state changes
media.addEventListener("change", function() {
  myFunction(media);
});