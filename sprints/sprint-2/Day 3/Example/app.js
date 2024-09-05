const forms = document.forms;
const contactForm = forms['contacts'];
const contactList = document.getElementById('contactList');

function sanitizeInput(input) {
  return input.replace(/[&<>"'/]/g, function (match) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
    };
    return map[match];
  });
}

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('form submitted');
  //   const name = document.getElementById('name');
  const name = sanitizeInput(contactForm.name.value).trim();
  //   console.log(name.innerHtml);
  const phone = contactForm.phone.value;
  console.log({ name, phone });

  if (!name) {
    const error = document.createElement('span');
    error.textContent = 'Please enter a name';
    error.style.color = 'red';
    const nameInput = document.getElementById('name');
    console.log(nameInput);
    nameInput.insertAdjacentElement('afterend', error);
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${name}: ${phone}`;
  contactList.appendChild(li);
});


const terms = document.getElementById('terms');
terms.addEventListener('change', function (event) {
    console.log(event.target.checked);
});