AOS.init({ once: true });

// Przełączanie widoczności info o twórcy
const linkAbout = document.getElementById('linkAbout');
const creatorInfo = document.getElementById('creatorInfo');
const linkContact = document.getElementById('linkContact');
const contactInfo = document.getElementById('contactInfo');

linkAbout.addEventListener('click', (e) => {
  e.preventDefault();
  if (contactInfo.style.display === 'block') {
    contactInfo.style.display = 'none';
  }
  creatorInfo.style.display = (creatorInfo.style.display === 'none') ? 'block' : 'none';
});

linkContact.addEventListener('click', (e) => {
  e.preventDefault();
  if (creatorInfo.style.display === 'block') {
    creatorInfo.style.display = 'none';
  }
  contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
});

// Walidacja formularza
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (message.length < 10) {
    alert("Wiadomość musi mieć co najmniej 10 znaków.");
    return;
  }

  formMessage.textContent = "Dziękujemy za kontakt!";
  formMessage.style.display = 'block';
  form.reset();
});