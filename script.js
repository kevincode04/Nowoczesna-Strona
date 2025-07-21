document.addEventListener('DOMContentLoaded', () => {
  // Inicjalizacja AOS
  AOS.init({ once: true });

  // Elementy nawigacji i sekcji info
  const linkAbout = document.getElementById('linkAbout');
  const creatorInfo = document.getElementById('creatorInfo');
  const linkContact = document.getElementById('linkContact');
  const contactInfo = document.getElementById('contactInfo');

  // Funkcja do przełączania widoczności elementu
  function toggleDisplay(elem) {
    const style = window.getComputedStyle(elem);
    elem.style.display = (style.display === 'none') ? 'block' : 'none';
  }

  // Kliknięcie "O nas"
  linkAbout.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.getComputedStyle(contactInfo).display === 'block') {
      contactInfo.style.display = 'none';
    }
    toggleDisplay(creatorInfo);
  });

  // Kliknięcie "Kontakt"
  linkContact.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.getComputedStyle(creatorInfo).display === 'block') {
      creatorInfo.style.display = 'none';
    }
    toggleDisplay(contactInfo);
  });

  // Walidacja formularza kontaktowego
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
});