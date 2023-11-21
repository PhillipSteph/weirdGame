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
var colorarr = [[
            "blue","blue","blue","blue","blue","blue","blue", 
            "black","blue","black","black","black","black","black", 
            "black","black","black","black","black","black","black", 
            "black","black","black","brown","brown","brown","brown", 
            "black","brown","black","brown","black","black","black", 
            "black","brown","black","black","black","brown","black", 
            "black","brown","brown","brown","brown","brown","black",       
]]

var worldposition=0; 

var tempmap = [], temp2map = [], temp3map = []

var i = 0;   
var gridsize=Math.sqrt(arr.length)
var position=0
var tempcol=colorarr[position][0]
drawcolarr()
arr[position].style.backgroundColor="red"
var direction=68
mapgenerator()
function mapgenerator(){
  if(colorarr.length===4){
    return;
  }

  i=0;x=0;y=0;z=0

while(i<gridsize*gridsize){

x = Math.random();y = Math.random();z = Math.random()

if(x<0.33){
  tempmap.push("black")
}else if(x<0.50){
  tempmap.push("brown")
}else{
  tempmap.push("green")
}

if(y<0.33){
  temp2map.push("black")
}else if(y<0.50){
  temp2map.push("brown")
}else{
  temp2map.push("green")
}

if(z<0.33){
  temp3map.push("black")
}else if(z<0.50){
  temp3map.push("brown")
}else{
  temp3map.push("green")
}

i++
  }
colorarr.push(tempmap)
console.log(tempmap)
colorarr.push(temp2map)
console.log(temp2map)
colorarr.push(temp3map)
console.log(temp3map)
}

function drawcolarr(){
  i=0
  while(i<gridsize*gridsize){
arr[i].style.backgroundColor=colorarr[worldposition][i]
i++
  }
}
function goup(){
  if(position<gridsize && worldposition<=1){
    return;
  }
  else if(position<gridsize){
    worldposition=worldposition-2
    drawcolarr()
    position=position+(gridsize*gridsize)-gridsize
    tempcol=colorarr[worldposition][position]
  arr[position].style.backgroundColor="red"
  }
  if(colorarr[worldposition][position-gridsize]=="brown"){return;}
  arr[position].style.backgroundColor=tempcol
  position=position-gridsize

  tempcol=colorarr[worldposition][position]
  arr[position].style.backgroundColor="red"
}
function godown(){
  if((gridsize*gridsize-gridsize)<=position && worldposition>=2){
    return;
  }
  else if((gridsize*gridsize-gridsize)<=position){
    worldposition=worldposition+2
    drawcolarr()
    position=position%7
    tempcol=colorarr[worldposition][position]
  arr[position].style.backgroundColor="red"
  }
  if(colorarr[worldposition][position+gridsize]=="brown"){return;}
  arr[position].style.backgroundColor=tempcol
  position=position+gridsize
  tempcol=colorarr[worldposition][position]
  arr[position].style.backgroundColor="red"
}
function goleft(){
  if(position%gridsize==0 && worldposition%2==0){
    return;
  }
  else if(position%gridsize==0){
    worldposition=worldposition-1
    drawcolarr()
    position=position+gridsize
    tempcol=colorarr[worldposition][position]
  arr[position].style.backgroundColor="red"
  }
  if(colorarr[worldposition][position-1]=="brown"){return;}
  arr[position].style.backgroundColor=tempcol
  position=position-1
  tempcol=colorarr[worldposition][position]
  arr[position].style.backgroundColor="red"
}
function goright(){
  if(position%gridsize==gridsize-1 && worldposition%2==1){
    return;
  }
  else if(position%gridsize==gridsize-1){
    worldposition=worldposition+1
    drawcolarr()
    position=position-gridsize
    tempcol=colorarr[worldposition][position]
  arr[position].style.backgroundColor="red"
  }
  if(colorarr[worldposition][position+1]=="brown"){return;}
  arr[position].style.backgroundColor=tempcol
  position=position+1
  tempcol=colorarr[worldposition][position]
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
    mapgenerator()
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