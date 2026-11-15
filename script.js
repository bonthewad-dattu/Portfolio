const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const viewMore = document.getElementById('viewMore');
const projectsGrid = document.getElementById('projectsGrid');
viewMore.addEventListener('click', () => {
  const expanded = projectsGrid.classList.toggle('show-all');
  viewMore.innerHTML = expanded ? 'Show fewer projects <span>−</span>' : 'View all projects <span>＋</span>';
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  document.getElementById('formNote').textContent = 'Your email app should open with the message prepared.';
  window.location.href = `mailto:sdbrothers333@gmail.com?subject=${subject}&body=${body}`;
});
