// ====== Tell the story
const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

let userInputs = {};

const stories = [
    (inputs) => `One day, ${inputs.person} went to ${inputs.place} to find a ${inputs.adjective} ${inputs.noun}. They decided to ${inputs.verb} all day long!`,
    
    (inputs) => `${inputs.person} had a dream about a ${inputs.adjective} ${inputs.noun}. In the dream, they had to ${inputs.verb} their way to ${inputs.place}.`,
    
    (inputs) => `In ${inputs.place}, there was a ${inputs.adjective} ${inputs.noun}. ${inputs.person} tried to ${inputs.verb} it but failed miserably!`,
    
    (inputs) => `The ${inputs.adjective} ${inputs.noun} belonged to ${inputs.person}. They would ${inputs.verb} with it every day at ${inputs.place}.`
];

let currentStoryIndex = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;
    
    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        alert('Please fill in all fields!');
        return;
    }
    
    userInputs = { noun, adjective, person, verb, place };
    
    const story = stories[0](userInputs);
    storySpan.textContent = story;
    
    shuffleButton.style.display = 'inline';
    currentStoryIndex = 0;
});

shuffleButton.addEventListener('click', function() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * stories.length);
    } while (newIndex === currentStoryIndex);
    
    currentStoryIndex = newIndex;
    
    const newStory = stories[currentStoryIndex](userInputs);
    storySpan.textContent = newStory;
});



// ====== Letters


