// 👋 Custom Typed Text Animation
const typedElement = document.getElementById('typed');

const words = [
  'Python Developer',
  'Web & AI Enthusiast',
  'Tech Learner'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenWords = 1500;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    // Deleting characters
    typedElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500); // slight pause before typing next word
    } else {
      setTimeout(type, deletingSpeed);
    }

  } else {
    // Typing characters
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

// ✅ Start animation once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  if (typedElement) {
    type();
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
