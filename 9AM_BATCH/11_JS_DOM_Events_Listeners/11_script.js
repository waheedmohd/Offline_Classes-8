// Change Text
let reverseString = (str) => {
    let tempString = '';
    for(let i = str.length-1 ; i>=0; i--){
        tempString += str.charAt(i);
    }
    return tempString;
};

// Get the HTML Element
let textBox = document.querySelector('#text-box');
let h2Tag = document.querySelector('#text-msg');
textBox.addEventListener('keyup',function () {
    let textEntered = textBox.value;
    h2Tag.innerText = reverseString(textEntered);
    // even number
    if(textEntered.length %2 === 0){
        textBox.style.borderColor = 'blue';
        textBox.style.boxShadow = '0 0 10px blue';
        h2Tag.style.color = 'blue';
    }
    else{
        textBox.style.borderColor = 'red';
        textBox.style.boxShadow = '0 0 10px red';
        h2Tag.style.color = 'red';
    }
});

// Good Morning Message
let goodMorningButton = document.querySelector('#gm-btn');
goodMorningButton.addEventListener('click',function() {
   displayMessage('Good Morning','yellow') ;
});

// Good Afternoon Message
let goodAfternoonButton = document.querySelector('#ga-btn');
goodAfternoonButton.addEventListener('click',function() {
    displayMessage('Good Afternoon','red') ;
});

// Good Evening Message
let goodEveningButton = document.querySelector('#ge-btn');
goodEveningButton.addEventListener('click',function() {
    displayMessage('Good Evening','blue') ;
});

// Good Night Message
let goodNightButton = document.querySelector('#gn-btn');
goodNightButton.addEventListener('click',function() {
    displayMessage('Good Night','teal') ;
});

// displayMessage
let displayMessage = (message, color) => {
    let h1Tag = document.querySelector('#msg');
    h1Tag.innerText = message;
    h1Tag.style.background = `linear-gradient(45deg,black,${color})`;
    h1Tag.style.color =  'white';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

// change the image
let changeImage = (imageName) => {
    let imageTag = document.querySelector('#laptop-image');
    imageTag.setAttribute('src',`../img/${imageName}`);
};