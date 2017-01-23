/*
Well Played Porject
Created by Jeff Wu
Collaborators: Liam White, Jeff Wu, Simon Stringer
Sign in Function
University of Portsmouth
2017.01.11
*/

//USER Information
var username = ['up793229@myport.ac.uk', 'up123456@myport.ac.uk'];
var password = ['123321', '123456'];

//Open dialog function
function openDialog(){
  var overlay = document.getElementById('dialogOverlay');
  var dialog = document.getElementById('dialog');
  dialog.style.display='block';
  overlay.style.display='block';
}

//Close dialog function
function closeDialog(){
  var overlay = document.getElementById('dialogOverlay');
  var dialog = document.getElementById('dialog');
  dialog.style.display='none';
  overlay.style.display='none';
}

//Check Username and Password function
function checkUP(u,p){

  for(i=0; i<username.length; i++){
    if(u == username[i]){

      if(p == password[i]){
        result = 1;
        break;
      }else{
        result = 0;
        break;
      }
    }else{
      result = 9;
    }
  }
  return result;
}


//Login Function with alert pop up
function login(){
  var u = document.getElementById('username').value;
  var p = document.getElementById('password').value;
  var alert = document.getElementById('alertOverlay');
  var alertContent = document.getElementById('alertContent');

  //Get the result from checker
  checkUP(u,p);
  content = (result != 1) ? 'Successful sign to Well Played' : 'Log in successful';

  //Pop Up alert
  alertContent.innerHTML = content;
  alert.style.display='block';

  //Alert display in 3 secound
  setTimeout(function(){document.getElementById('alertOverlay').style.display='none';}, 3000);

  //Close dialog immediatelly
  closeDialog();

}
