// Change event on Select Box
let selectBox = document.querySelector('#select-box');
let spanTag = document.querySelector('#select-option');
selectBox.addEventListener('change',function() {
   let selectedOption = selectBox.value;
   spanTag.innerText = selectedOption.toUpperCase();
});

// Show Password
let passwordBox = document.querySelector('#password-box');
let checkBox = document.querySelector('#check-box');
let passwordData = document.querySelector('#password-data');
checkBox.addEventListener('change',function() {
   let attribute = passwordBox.getAttribute('type');
   if(attribute === 'password'){
       passwordBox.setAttribute('type','text');
   }
   else{
       passwordBox.setAttribute('type','password');
   }
});
passwordBox.addEventListener('keyup',function() {
    let textEntered = passwordBox.value;
    passwordData.innerText = textEntered;
});


// SMS App
let textArea = document.querySelector('#text-area');
let charCountElement = document.querySelector('#char-count');
let charCount = Number.parseInt(textArea.getAttribute('maxlength'));
textArea.addEventListener('keyup',function() {
   let textEnteredLength = textArea.value.length;
   charCountElement.innerText = charCount - textEnteredLength;
});

// Select Box Data from an Array
let colors = ['white' , 'black', 'red' , 'orange', 'blue' , 'purple' , 'yellow'];
let options = `<option>Select a Color</option> \n`;
for(let color of colors){
    options += `<option>${color.toUpperCase()}</option> \n`;
}
let colorSelectBox = document.querySelector('#color-select');
colorSelectBox.innerHTML = options;