var map = document.getElementById("map")
var minimaptable = document.getElementById("minimaptable")
var game = document.getElementById("game")
var arr = [
            document.getElementById("0"),document.getElementById("1"),document.getElementById("2"),document.getElementById("3"),document.getElementById("4"),document.getElementById("5"), document.getElementById("6"),
            document.getElementById("7"),document.getElementById("8"),document.getElementById("9"),document.getElementById("10"),document.getElementById("11"),document.getElementById("12"), document.getElementById("13"),
            document.getElementById("14"),document.getElementById("15"),document.getElementById("16"),document.getElementById("17"),document.getElementById("18"),document.getElementById("19"), document.getElementById("20"),
            document.getElementById("21"),document.getElementById("22"),document.getElementById("23"),document.getElementById("24"),document.getElementById("25"), document.getElementById("26"), document.getElementById("27"),
            document.getElementById("28"),document.getElementById("29"),document.getElementById("30"),document.getElementById("31"),document.getElementById("32"), document.getElementById("33"), document.getElementById("34"),        
            document.getElementById("35"),document.getElementById("36"),document.getElementById("37"),document.getElementById("38"),document.getElementById("39"), document.getElementById("40"), document.getElementById("41"),
            document.getElementById("42"),document.getElementById("43"),document.getElementById("44"),document.getElementById("45"),document.getElementById("46"), document.getElementById("47"), document.getElementById("48")
]
var twumplocked = true;
var bidenlocked = true;
var sodalocked = true;
var score = document.getElementById("score")
var msg = document.getElementById("msg")
var bombtext = document.getElementById("bomb")
score.innerHTML="Dollars:0"
var colorarr = [[]]
var blockcolor ="violet"
var worldposition=0; 
var worldsize=9;
var position=24
var tempmap = []
var i = 0;
var bombcount = 3;
bombtext.innerHTML="bombs: "+bombcount
var gridsize=Math.sqrt(arr.length)
var tempcol=colorarr[0][0]
var playerskin="url(obamna.png)"
createminimaphtml()
mapgenerator()
colorarr[worldposition][position]="black"
drawcolarr()
posred()
checkworldposition()
function createminimaphtml(){
  a=0;
  j=0;k=0;
var string=""
  while(j<worldsize){
    a+=worldsize
    string += "<tr>"
      while(k<a){
        string+= "<th><div class='minimapblock' id='mm"+k+"'></div></th>"
        k++
      }
    string+="<tr>"
j++
  }
  minimaptable.innerHTML+=string
}
function custommapgenerator(map,type,col1,col2){ //map 0-3; type 1-3
  switch(type){
    case 1: genmap1on(map,col1,col2) ; break;
    case 2: genmap2on(map,col1,col2) ; break;
    case 3: genmap3on(map,col1,col2) ; break;
  }
  if(worldposition==map){
    drawcolarr()
    posred()
  }
}
var scr=0
function calculatescore(){

  score.innerHTML="Dollars:0"
  if(colorarr[worldposition][position]=="green"){
    if(playerskin=="url(biden.png)"){
      if(scr==0){scr=2}else{
      scr=scr+scr}
    }
    else if(playerskin=="url(twump.png)"){
      scr++
      scr++
    }else{
      scr++
    }
    
    colorarr[worldposition][position]="black"
    drawcolarr()
    arr[position].backgroundImage=""
    score.innerHTML="Dollars:"+scr
  }else{
    score.innerHTML="Dollars:"+scr
    drawcolarr()
  }
  }

function genmap1on(map,col1,col2){
  tempmap = []
  colorarr[map] = []
  i=0;
  while(i<gridsize*gridsize){
    if(i%2==0){
        tempmap.push(col1)
    }else{tempmap.push(col2)}
    i++
  }colorarr[map]=tempmap
  i=0
}
function genmap2on(map,col1,col2){
  tempmap = []
  colorarr[map] = []
  i=0;
  while(i<gridsize*gridsize){
if(i<gridsize || i>=gridsize*gridsize-gridsize || i%gridsize==0 || i%gridsize==gridsize-1 || i%gridsize==(gridsize-1)/2){
  tempmap.push(col1)
} else tempmap.push(col2)
i++
  }colorarr[map]=tempmap
}

function genmap3on(map,col1,col2){
  tempmap = []
  colorarr[map] = []
  i=0;
  while(i<gridsize*gridsize){
    x = (Math.random()*1.7).toFixed(0)
    while(x>0){
      tempmap.push(col1)

      i++
      x--
    }
      tempmap.push(col2)
      y = Math.random()
      if(y<=0.2){
        tempmap.push("green")
      }else{tempmap.push(col2)}
      i++
    }

  colorarr[map]=tempmap}
function mapgenerator(){
  i=0
  while(i<worldsize*worldsize-1){
    colorarr.push([])
    i++
  }
  j=0
  while(j<worldsize*worldsize){
    genmap3on(j,"violet","black")
    j++
  }
}
function posred(){
  i=0
  while(i<gridsize*gridsize){
    arr[i].style.backgroundImage=""
    i++
  }
  tempcol=colorarr[worldposition][position]
  arr[position].style.backgroundImage = playerskin
  arr[position].style.backgroundSize = "cover"  
}
function drawcolarr(){
  i=0

  while(i<gridsize*gridsize){
    arr[i].style.backgroundColor=colorarr[worldposition][i]
    if(arr[i].style.backgroundColor!="green"){
    arr[i].style.backgroundImage=""}
    i++
  }
}
function goup(){
  if(position<gridsize && worldposition<=worldsize-1){
    return;
  }

  else if(position<gridsize){
    if(colorarr[worldposition-worldsize][position+(gridsize*gridsize)-gridsize]==blockcolor){msg.innerHTML="versperrt";return;}
    worldposition=worldposition-worldsize
    position=position+(gridsize*gridsize)-gridsize
    calculatescore()
    posred()
    return;
  }
  if(colorarr[worldposition][position-gridsize]==blockcolor){msg.innerHTML="versperrt";return;}
  arr[position].style.backgroundColor=tempcol
  position=position-gridsize
  calculatescore()
  posred()
  msg.innerHTML=""
}
function godown(){
  if((gridsize*gridsize-gridsize)<=position && worldposition>=worldsize*worldsize-worldsize){
    return;
  }
  else if((gridsize*gridsize-gridsize)<=position){
    if(colorarr[worldposition+worldsize][position%7]==blockcolor){msg.innerHTML="versperrt";return;}
    worldposition=worldposition+worldsize
    position=position%7
    calculatescore()
    posred()
    return;
  }
  if(colorarr[worldposition][position+gridsize]==blockcolor){msg.innerHTML="versperrt";return;}
  arr[position].style.backgroundColor=tempcol
  position=position+gridsize
  calculatescore()
  posred()
  msg.innerHTML=""
}
function goleft(){
  if(position%gridsize==0 && worldposition%worldsize==0){
    return;
  }
  else if(position%gridsize==0){
    if(colorarr[worldposition-1][position-1+gridsize]==blockcolor){msg.innerHTML="versperrt";return;}
    worldposition=worldposition-1
    position=position-1+gridsize
    calculatescore()
    posred()
    return;
  }
  if(colorarr[worldposition][position-1]==blockcolor){msg.innerHTML="versperrt";return;}
  arr[position].style.backgroundColor=tempcol
  position=position-1
  calculatescore()
  posred()
  msg.innerHTML=""
}
function goright(){
  if(position%gridsize==gridsize-1 && worldposition%worldsize==worldsize-1){
    return;
  }
  else if(position%gridsize==gridsize-1){
    if(colorarr[worldposition+1][position+1-gridsize]==blockcolor){msg.innerHTML="versperrt";return;}
    worldposition=worldposition+1
    position=position+1-gridsize
    calculatescore()
    posred()
    return;
  }
  if(colorarr[worldposition][position+1]==blockcolor){msg.innerHTML="versperrt";return;}
  arr[position].style.backgroundColor=tempcol
  position=position+1
  calculatescore()
  posred()
  msg.innerHTML=""
}
function move(){
if(direction===87){
  goup()
}
if(direction===83){
  godown()
}
if(direction===65){
  goleft()
}
if(direction===68){
  goright()
}

}
function checkworldposition(){
  var minimapblocks = document.getElementsByClassName("minimapblock")
  for( var l=0; l<minimapblocks.length;l++){

    if(minimapblocks[worldposition].id=="mm"+l){

      for(var m=0;m<minimapblocks.length;m++){minimapblocks[m].style.backgroundColor="grey"}
      

      minimapblocks[l].style.backgroundColor="red"
    }
    
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
  if(event.keyCode === 49){
    custommapgenerator(worldposition,1,"black","green")
  }
  if(event.keyCode === 50){
    custommapgenerator(worldposition,2,"black","violet")
  }
  if(event.keyCode === 51){
    custommapgenerator(worldposition,3,"violet","black")
  }
  if(event.keyCode === 52){
    playerskin="url(obamna.png)"
    posred()
  }
  if(event.keyCode === 53){
   buysoda()
    posred()
  }
  if(event.keyCode === 54){
  buytwump()
  }
  if(event.keyCode === 55){
 buybiden()
  }
  if(event.keyCode === 56){
    buybomb()
     }
     if(event.keyCode === 57){
      usebomb()
       }
  checkworldposition()
}
function buybiden(){
  if(bidenlocked == false){
    playerskin="url(biden.png)"
    arr[position].style.backgroundImage = playerskin
    arr[position].style.backgroundSize = "cover"  
  }
  else if(scr>=50){
    console.log(scr)
    scr-=50
  calculatescore();
  bidenlocked = false;
  playerskin="url(biden.png)"
  posred()  
  document.getElementById("bidenbtn").innerHTML="equip (7)"
  }
}
function buytwump(){
  if(twumplocked == false){
    playerskin="url(twump.png)"
    arr[position].style.backgroundImage = playerskin
    arr[position].style.backgroundSize = "cover"  
  }
  else if(scr>=20){
    console.log(scr)
    scr-=20
  calculatescore();
  twumplocked = false;
  playerskin="url(twump.png)"
  posred()  
  document.getElementById("twumpbtn").innerHTML="equip (6)"
  }
}
function buysoda(){
  if(sodalocked == false){
    playerskin="url(soda.png)"
    arr[position].style.backgroundImage = playerskin
    arr[position].style.backgroundSize = "cover"  
  }
  else if(scr>=10){
    console.log(scr)
    scr-=10
  calculatescore();
  sodalocked = false;
  playerskin="url(soda.png)"
  posred()  
  document.getElementById("sodabtn").innerHTML="equip (5)"
  }
}
function buybomb(){

  if(scr>=3){
    bombcount+=1
    bombtext.innerHTML="bombs: "+bombcount
    scr-=3
    score.innerHTML="Dollars:"+scr
  }

}
function usebomb(){
  if(bombcount>=1){
    if(position%gridsize!=6){colorarr[worldposition][position+1]="black"}
    if(position%gridsize!=0){colorarr[worldposition][position-1]="black"}
  colorarr[worldposition][position+gridsize]="black"//down
  colorarr[worldposition][position-gridsize]="black"//up
  drawcolarr()
  posred()
  bombcount-=1
  bombtext.innerHTML="bombs: "+bombcount
  }
}
function info(player){
  var str
  switch(player){
    case 1: str="Der süße twump begleitet dich auf deiner Reise und sammelt UWU dir doppelte Dollar XOXO";break;
    case 2:str="Biden ist ein ganz spezieller. Ein Präsident derzeit. Er bietet dir exponentielles Wachstum deines Geldes. Wahrer Kapitalist.";break;
    case 3: str="nur ein soda skin. SODA!!";break;
    case 4: str="Bomben sprengen die Wege um dich herum.Für 3 Dollar pro Stück preiswert.";break;
    default:break;
  }
  alert(str)
}