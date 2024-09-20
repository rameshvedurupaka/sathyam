document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We have received your message.`);
        // You can add more logic here like sending the form data to a server
    } else {
        alert('Please fill in all fields.');
    }
});
