const strings = ["Frontend Developer", "PenTester", "Software Engineer", "Web Developer"];
const typeSpeed = 100;
const backSpeed = 100;
const backDelay = 1000;
let loop = true;

let currentIndex = 0;
let currentString = "";
let isDeleting = false;

function type() {
  const textElement = document.querySelector('.text');

  currentString = strings[currentIndex];
  
  if (!isDeleting && currentString.length > textElement.innerText.length) {
    textElement.innerText = currentString.substring(0, textElement.innerText.length + 1);
  } else if (isDeleting && textElement.innerText.length > 0) {
    textElement.innerText = currentString.substring(0, textElement.innerText.length - 1);
  } else {
    isDeleting = !isDeleting;
    if (isDeleting) {
      loop ? currentIndex = (currentIndex + 1) % strings.length : currentIndex++;
    }
    setTimeout(type, isDeleting ? backSpeed : typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  type();
});
