// ====== Tell the story
const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

let userInputs = {};

const stories = [
  (inputs) => `One morning, ${inputs.person} found a ${inputs.adjective} ${inputs.noun} waiting on a bench at ${inputs.place}. They decided to ${inputs.verb} together until the pigeons started clapping.`,
  
  (inputs) => `${inputs.person} dreamed the ${inputs.noun} at ${inputs.place} could whisper secrets. It spoke in ${inputs.adjective} riddles and taught them how to ${inputs.verb} with a smile.`,
  
  (inputs) => `At ${inputs.place}, a ${inputs.adjective} ${inputs.noun} opened a tiny store selling single moments of joy. ${inputs.person} went inside to ${inputs.verb} and left with a pocket full of 7lwa.`,
  
  (inputs) => `The ${inputs.adjective} ${inputs.noun} sent ${inputs.person} a postcard asking to ${inputs.verb} at ${inputs.place}. They met, swapped silly stories, and the world felt a little softer.`
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


