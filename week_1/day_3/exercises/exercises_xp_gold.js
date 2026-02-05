// ===== Exercise 1

const selectElement = document.getElementById('genres');
console.log(selectElement.value);

const newOption = document.createElement('option');
newOption.value = 'classic';
newOption.textContent = 'Classic';
selectElement.appendChild(newOption);


newOption.selected = true;




// ===== Exercise 2


const colorSelect = document.getElementById('colorSelect');
const removeButton = document.querySelector('input[type="button"]');


function removecolor() {
    const selectedIndex = colorSelect.selectedIndex;
    
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
}


removeButton.addEventListener('click', removecolor);


// ===== Exercise 3

let shoppingList = [];

const root = document.getElementById('root');


const form = document.createElement('form');

const input = document.createElement('input');
input.type = 'text';
input.id = 'itemInput';
input.placeholder = 'Enter item...';

const addButton = document.createElement('button');
addButton.textContent = 'AddItem';
addButton.type = 'button';

form.appendChild(input);
form.appendChild(addButton);


const clearButton = document.createElement('button');
clearButton.textContent = 'ClearAll';
clearButton.type = 'button';

const listDisplay = document.createElement('ul');
listDisplay.id = 'listDisplay';

root.appendChild(form);
root.appendChild(clearButton);
root.appendChild(listDisplay);

function addItem() {
    const itemValue = input.value.trim();
    
    if (itemValue !== '') {
        shoppingList.push(itemValue);
        
        const li = document.createElement('li');
        li.textContent = itemValue;
        listDisplay.appendChild(li);
        
        input.value = '';
        console.log(shoppingList);
    }
}

function clearAll() {
    shoppingList = [];
    listDisplay.innerHTML = '';
    console.log('List cleared:', shoppingList);
}

addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearAll);