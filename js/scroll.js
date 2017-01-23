
//Scroll Recommened video list
function sL(idDiv,idThis,idOp){
  var div = document.getElementById(idDiv); //Get this div
  var next = document.getElementById(idThis);
  var back = document.getElementById(idOp);
  var t = 0;
  var an = setInterval(frame, 5); //Set a timer abd run this function in every 5 mm second
  function frame(){ //Animation Function
    if(t == 150){
      clearInterval(an);  //clear animation
    }else{
      t++;
      div.scrollLeft += 30; //Scroll from left
    }
  }
  back.style.display = "block";
  next.style.display = "none";
}

function sR(idDiv,idThis,idOp){
  var div = document.getElementById(idDiv); //Get this div
  var next = document.getElementById(idOp);
  var back = document.getElementById(idThis);
  var t = 0;
  var an = setInterval(frame, 5); //Set a timer abd run this function in every 5 mm second
  function frame(){ //Animation Function
    if(t == 150){
      clearInterval(an);  //clear animation
    }else{
      t++;
      div.scrollLeft -= 30; //Scroll from left
    }
  }
  back.style.display = "none";
  next.style.display = "block";
}
