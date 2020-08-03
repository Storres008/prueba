
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagenes/carajo.jpg') {
      myImage.setAttribute('src','imagenes/carajo2.jpg');
    } else {
      myImage.setAttribute('src','imagenes/carajo3.jpg');    
    }
    if(mySrc === 'imagenes/carajo3.jpg') {
      myImage.setAttribute('src','imagenes/carajo.jpg');
    } 
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');
function setUserName() {let myName = prompt('Por favor ingresa tu nombre'); 
                       localStorage. setItem ( 'name', myName);
                       myHeading.textContent = 'Welcome,' + myName; 
                       }
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}