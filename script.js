const estadoCheck = document.getElementById("checkBtn");
window.addEventListener('resize', function(){
  if (this.window.innerWidth > 1250){
    if(estadoCheck.value = true){
      estadoCheck.checked = false;
    }
  }
});