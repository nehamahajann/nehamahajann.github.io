// Typed text effect - types and erases words in loop
const typedElement = document.getElementById('typed');

const words = [
  'Python Developer',
  'Web & AI Enthusiast',
  'Full-stack Developer',
  'Tech Learner'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseBetweenWords = 1500;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    // Remove a char
    typedElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, deletingSpeed);
    }
  } else {
    // Add a char
    typedElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, pauseBetweenWords);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

// Start typing effect after DOM loaded
window.addEventListener('DOMContentLoaded', () => {
  if (typedElement) {
    type();
  }
});
