// Select elements once to optimize performance
const button = document.querySelector('.changeBtn');
const heading = document.querySelector('.h2');
const container = document.querySelector('.box');

// Add click event listener to the button
button.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    heading.innerText = randomColor; // Update heading text
    container.style.backgroundColor = randomColor; // Change background color
});

// Function to generate a random RGB color
function generateRandomColor() {
    const red = Math.floor(Math.random() * 256); // Range: 0-255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`; // Return as RGB string
}



