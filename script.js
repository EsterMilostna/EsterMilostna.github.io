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
  
 var box=document.getElementByID("box1");
var touchController=new SwipeElementItem(box1);

  
