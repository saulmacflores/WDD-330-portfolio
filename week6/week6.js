// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    checkNumber();

  }
}

// symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    checkNumber();
  }

}, false);

// function to create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
    checkNumber();

  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.remove();
      checkNumber();
    }
  }
}

//function for the checked button 
function showAll() {
    for (i=0; i < myNodelist.length; i++){
            myNodelist[i].style.display = "block";
    }
}
function showChecked() {
    let removedElements = 0;
    for (i=0; i < myNodelist.length - removedElements; i++){
        if (myNodelist[i].classList.contains("checked")){
            myNodelist[i].style.display = "block";

        } else {
            myNodelist[i].style.display = "none";
        }
    }
}
function showUnchecked() {
    let removedElements = 0;
    for (i=0; i < myNodelist.length - removedElements; i++){
        if (myNodelist[i].classList.contains("checked")){
            myNodelist[i].style.display = "none";
            
        } else {
            myNodelist[i].style.display = "block";
        }
    }
}

//How many Items left 
function checkNumber() {
let items =0;
for (i=0; i < myNodelist.length; i++){
    if (myNodelist[i].classList.contains("checked")==false){
        items++;
    }
}
let itemsLeft = document.getElementsByClassName("taskLeft")[0]
itemsLeft.innerHTML = items + " tasks Left!"
console.log(itemsLeft);
}
checkNumber();