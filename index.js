var numberofdrums=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofdrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
      var buttoninnerhtml= this.innerHTML;
      
      makesound(buttoninnerhtml);
      buttonAnimaton(buttoninnerhtml);
       
     } );
}


document.addEventListener("keydown", function(event){
   makesound(event.key);
   buttonAnimaton(event.key);
}) ;

function makesound(key){

  switch(key){
    case "w": var crash = new Audio("sounds/crash.mp3");
    crash.play(); break;

    case "a":  var kick = new Audio("sounds/kick.mp3");
    kick.play(); break;

    case "s":  var snare = new Audio("sounds/snare.mp3");
    snare.play(); break;

    case "d":  var tom1 = new Audio("sounds/tom1.mp3");
    tom1.play(); break;

    case "j":  var tom2 = new Audio("sounds/tom2.mp3");
    tom2.play(); break;

    case "k":  var tom3 = new Audio("sounds/tom3.mp3");
    tom3.play(); break;

    case "l":  var tom4 = new Audio("sounds/tom4.mp3");
    tom4.play(); break;

    default: console.log(buttoninnerhtml);

  }

}


function buttonAnimaton(currentkey){

    var activebutton = document.querySelector("."+ currentkey);

    activebutton.classList.add("pressed");
    setTimeout(function(){
      activebutton.classList.remove("pressed");}, 100 ) ;
    
}