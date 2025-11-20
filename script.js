// Color change boxes
const box1 = document.getElementById('box-1');
box1.addEventListener('click', () => {
    box1.style.backgroundColor = 'red';
    box1.style.color = 'white';
})

const box2 = document.getElementById('box-2');
box2.addEventListener('click', () => {
    box2.style.backgroundColor = 'blue';
    box2.style.color = 'white';
})

const box3 = document.getElementById('box-3');
box3.addEventListener('click', () => {
    box3.style.backgroundColor = 'green';
    box3.style.color = 'white';
})

const box4 = document.getElementById('box-4');
box4.addEventListener('click', () => {
    box4.style.backgroundColor = 'yellow';
    box4.style.color = 'black';
})

// Greet message update
const form = document.querySelector('.userName');
const inputName = document.getElementById('name');
const greetingSpan = document.querySelector('h1 span');

form.addEventListener('submit', function (e) {
    e.preventDefault();  // prevent form reload

    const nameValue = inputName.value.trim();

    if (nameValue !== "") {
        greetingSpan.textContent = `, ${nameValue}`;
    }
});
