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
      if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
    document.body.addEventListener('touchstart', function() {}, false);
  }
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
  function beTouchend (event) {
    // current box position.
    var x = parseInt(event.target.style.left);
    var y = parseInt(event.target.style.top);
  }
function beTouchmove (event) {
    // grab the location of touch
    var touchLocation = event.targetTouches[0];
    
    // assign box new coordinates based on the touch.
    event.target.style.left = touchLocation.pageX + 'px';
    event.target.style.top = touchLocation.pageY + 'px';
  }
window.onload = function() {
  // find the element that you want to drag.
  var box1 = document.getElementById('box1');
  box1.addEventListener('touchmove', beTouchmove );
  box1.addEventListener('touchend', beTouchend );
  var box2 = document.getElementById('box2');
  box2.addEventListener('touchmove', beTouchmove );
  box2.addEventListener('touchend', beTouchend );
  var box3 = document.getElementById('box3');
  box3.addEventListener('touchmove', beTouchmove );
  box3.addEventListener('touchend', beTouchend );
  var box4 = document.getElementById('box4');
  box4.addEventListener('touchmove', beTouchmove );
  box4.addEventListener('touchend', beTouchend );
}

  
  
 var box=document.getElementByID("box1");
var touchController=new SwipeElementItem("box1");
