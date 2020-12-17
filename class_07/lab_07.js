var WlcMassage = "Welcome in the world of information"

alert(WlcMassage);

function yourname() {
    var name = prompt("What is your name?");
    alert("Hello " + name);
  }
  
  function answer() {
    var answer = prompt("do you like PDF book");
    if(answer === "yes") {
      alert("you are in right place");
    } else {
      alert("you should vist us in in our book shop");
    }
  }
  

function display()
         {
             var col=document.getElementById("demo");
             var color=document.getElementById("inputCol");
             col.style.color=color.value;
         }
          yourname()
          answer()
          