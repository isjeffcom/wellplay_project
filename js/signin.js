function openDialog(){
  var overlay = document.getElementById('dialogOverlay');
  var dialog = document.getElementById('dialog');
  dialog.style.display='block';
  overlay.style.display='block';
}

function closeDialog(){
  var overlay = document.getElementById('dialogOverlay');
  var dialog = document.getElementById('dialog');
  dialog.style.display='none';
  overlay.style.display='none';
}
