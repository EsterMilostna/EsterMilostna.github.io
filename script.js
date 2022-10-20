function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  
  //this code is executed first
  
  on ();
  
  // this line indicates that the function definition will be executed once 3ms have passed
  
  setTimeout(off, 5000);
  
  var lastid = "x"
  var heslo = "x"
  var replace = "x"
  function porovnej() {
  
    var hodnota = "#"+heslo+"vepsane";
      if (document.querySelector(hodnota).value === heslo) {
   location.replace(replace);
        } else {
        alert("chybne heslo")
        }
  }
  
  function varHeslo(event) {
    var id = event.target.id;
    heslo = id;
    replace = id+".html";
    var name = id+"hledani";
  //  document.getElementsByClassName("hledani").add("hidden");
  //  document.getElementById(name).classList.remove("hidden");
    document.getElementById(name).classList.remove("hidden");
    if (name != lastid) {document.getElementById(lastid).classList.add("hidden");}
   // document.getElementById(event.target.id).style.color = "#ff0000";
    lastid = name;
  
  }
  
  document.querySelector("#btn1").addEventListener("click", porovnej);
  document.querySelector("#btn2").addEventListener("click", porovnej);
  
  document.querySelector("#s1").addEventListener("click", varHeslo);
  document.querySelector("#s2").addEventListener("click", varHeslo);
  
  window.onload = function() {
    // find the element that you want to drag.
    var box = document.getElementById('box');
    
    /* listen to the touchMove event,
    every time it fires, grab the location
    of touch and assign it to box */
    
    box.addEventListener('touchmove', function(e) {
      // grab the location of touch
      var touchLocation = e.targetTouches[0];
      
      // assign box new coordinates based on the touch.
      box.style.left = touchLocation.pageX + 'px';
      box.style.top = touchLocation.pageY + 'px';
    })
    
    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */
    
    box.addEventListener('touchend', function(e) {
      // current box position.
      var x = parseInt(box.style.left);
      var y = parseInt(box.style.top);
    })
    
  }
  