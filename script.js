var Map =   document.getElementById("map")

var arr = [
            document.getElementById("0"),document.getElementById("1"),document.getElementById("2"),document.getElementById("3"),document.getElementById("4"),document.getElementById("5"), document.getElementById("6"),
            document.getElementById("7"),document.getElementById("8"),document.getElementById("9"),document.getElementById("10"),document.getElementById("11"),document.getElementById("12"), document.getElementById("13"),
            document.getElementById("14"),document.getElementById("15"),document.getElementById("16"),document.getElementById("17"),document.getElementById("18"),document.getElementById("19"), document.getElementById("20"),
            document.getElementById("21"),document.getElementById("22"),document.getElementById("23"),document.getElementById("24"),document.getElementById("25"), document.getElementById("26"), document.getElementById("27"),
            document.getElementById("28"),document.getElementById("29"),document.getElementById("30"),document.getElementById("31"),document.getElementById("32"), document.getElementById("33"), document.getElementById("34"),        
            document.getElementById("35"),document.getElementById("36"),document.getElementById("37"),document.getElementById("38"),document.getElementById("39"), document.getElementById("40"), document.getElementById("41"),
            document.getElementById("42"),document.getElementById("43"),document.getElementById("44"),document.getElementById("45"),document.getElementById("46"), document.getElementById("47"), document.getElementById("48")
          ]
var colorarr = [
            "blue","blue","blue","blue","blue","blue","blue", 
            "black","black","black","black","black","black","black", 
            "black","black","black","black","black","black","black", 
            "black","black","black","brown","brown","brown","brown", 
            "black","brown","black","brown","black","black","black", 
            "black","brown","black","black","black","brown","black", 
            "black","brown","brown","brown","brown","brown","black",       
]
var i = 0;   
var gridsize=Math.sqrt(arr.length)
var position=0
var tempcol="black"
checkerboard()
arr[position].style.backgroundColor="red"
var direction=68

function checkerboard(){
  i=0
  while(i<gridsize*gridsize){
arr[i].style.backgroundColor=colorarr[i]
i++
  }
}
function goup(){
  if(position<gridsize){
    return;
  }
  if(colorarr[position-gridsize]=="brown"){return;}
  arr[position].style.backgroundColor=tempcol
  position=position-gridsize

  tempcol=colorarr[position]
  arr[position].style.backgroundColor="red"
}
function godown(){
  if((gridsize*gridsize-gridsize)<=position){
    return;
  }
  if(colorarr[position+gridsize]=="brown"){return;}
  arr[position].style.backgroundColor=tempcol
  position=position+gridsize
  tempcol=colorarr[position]
  arr[position].style.backgroundColor="red"
}
function goleft(){
  if(position%gridsize==0){
    return;
  }
  if(colorarr[position-1]=="brown"){return;}
  arr[position].style.backgroundColor=tempcol
  position=position-1
  tempcol=colorarr[position]
  arr[position].style.backgroundColor="red"
}
function goright(){
  if(position%gridsize==gridsize-1){
    return;
  }
  if(colorarr[position+1]=="brown"){return;}
  arr[position].style.backgroundColor=tempcol
  position=position+1
  tempcol=colorarr[position]
  arr[position].style.backgroundColor="red"
}
function move(){
if(direction===87){
  console.log("going up")
  goup()
}
if(direction===83){
  console.log("going down")
  godown()
}
if(direction===65){
  console.log("going left")
  goleft()
}
if(direction===68){
  console.log("going right")
  goright()
}

}
window.onkeydown = function(event){
  if(event.keyCode === 87 || event.keyCode === 83 || event.keyCode === 65 || event.keyCode === 68){
  direction=event.keyCode
  move()
  }
  if(event.keyCode === 81){
    console.log(event.keyCode)
    checkerboard()
  }
}
/* function myLoop() {
  setTimeout(function() { 

    arr[i].style.backgroundColor="red"
    console.log(i)  
    i++;
    if (i < 9) { 
      myLoop(); 
    } 
  }, 1000)
}

myLoop(); */