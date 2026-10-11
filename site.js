const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('.package-card').forEach(card => {
  const link = card.querySelector('.package-info > .text-link');
  const title = card.querySelector('h3')?.textContent.trim();
  const details = card.querySelectorAll('.trip-detail dd');
  if (!link || !title || details.length < 2) return;
  const params = new URLSearchParams({
    trip: title,
    destination: details[0].textContent.trim(),
    dates: details[1].textContent.trim()
  });
  link.href = `enquiry.html?${params.toString()}`;
});

const tripEnquiry = document.querySelector('[data-trip-enquiry]');
if (tripEnquiry) {
  const params = new URLSearchParams(window.location.search);
  const trip = params.get('trip');
  if (trip) {
    tripEnquiry.elements.namedItem('trip').value = trip;
    tripEnquiry.elements.namedItem('destination').value = params.get('destination') || '';
    tripEnquiry.elements.namedItem('service').value = 'Complete trip planning';
    const notes = tripEnquiry.elements.namedItem('notes');
    notes.value = `I’m interested in ${trip}${params.has('dates') ? `, suggested for ${params.get('dates')}` : ''}.`;
  }
}

document.querySelectorAll('[data-local-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (!status) return;
    const name = form.querySelector('[name="name"]')?.value.trim();
    const trip = form.elements.namedItem('trip')?.value;
    if (form.matches('[data-trip-enquiry]')) {
      status.textContent = name
        ? `Thank you, ${name}. Your ${trip ? `${trip} ` : ''}enquiry is ready in this preview.`
        : 'Your enquiry is ready in this preview.';
    } else {
      status.textContent = name
        ? `Thank you, ${name}. Your feedback is ready in this preview.`
        : 'Your feedback is ready in this preview.';
    }
    form.reset();
  });
});
