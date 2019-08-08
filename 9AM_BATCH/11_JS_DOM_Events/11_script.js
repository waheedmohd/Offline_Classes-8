// change the Text

let reverseString = (str) => {
    let tempString = '';
    for(let i = str.length-1 ; i>=0; i--){
        tempString += str.charAt(i);
    }
    return tempString;
};


let changeText = () => {
    let textBox = document.querySelector('#text-box');
    let h2Tag = document.querySelector('#text-msg');
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
};

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