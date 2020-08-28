var emailElem = document.getElementById('email');
var buttonElem = document.getElementById('submit-btn');
var nameElem = document.getElementById('name');
buttonElem.addEventListener('click',function(){

})

var nameValue = document.getElementById("name-text");
var emailValue = document.getElementById("email-text");


const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', function(e){
e.preventDefault();
})
console.log("submitted");
console.log(nameElem.value);
console.log(emailElem.value);
emailValue.textContent = emailElem.value;
nameValue.textContent = nameElem.value;