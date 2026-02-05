// ===== Exercise 1
const h1 = document.querySelector('h1');
console.log(h1);


const article = document.querySelector('article');
const paragraphs = article.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();

const h2 = document.querySelector('h2');
h2.addEventListener('click', function() {
    h2.style.backgroundColor = 'red';
});


const h3 = document.querySelector('h3');
h3.addEventListener('click', function() {
    h3.style.display = 'none';
});


const boldBtn = document.getElementById('Btn');
boldBtn.addEventListener('click', function() {
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
});

h1.addEventListener('mouseover', function() {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + 'px';
});


const secondParagraph = paragraphs[1];
secondParagraph.classList.add('fade-paragraph');


// ===== Exercise 2
const form = document.querySelector('form');
console.log(form);

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput);
console.log(lnameInput);

const firstnameByName = document.querySelector('input[name="firstname"]');
const lastnameByName = document.querySelector('input[name="lastname"]');
console.log(firstnameByName);
console.log(lastnameByName);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fnameValue = fnameInput.value;
    const lnameValue = lnameInput.value;
    
    if (fnameValue !== '' && lnameValue !== '') {
        const ul = document.querySelector('.usersAnswer');
        
        const li1 = document.createElement('li');
        li1.textContent = fnameValue;
        
        const li2 = document.createElement('li');
        li2.textContent = lnameValue;
        
        ul.appendChild(li1);
        ul.appendChild(li2);
    }
});
// ===== Exercise 3
let allBoldItems;


function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}


function highlight() {
    allBoldItems.forEach(function(item) {
        item.style.color = 'blue';
    });
}


function returnItemsToDefault() {
    allBoldItems.forEach(function(item) {
        item.style.color = 'black';
    });
}

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);


getBoldItems();
// ===== Exercise 4
const myForm = document.getElementById('MyForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);
    
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    const volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(2);
});



