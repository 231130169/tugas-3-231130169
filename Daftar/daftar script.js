document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
    // Simulate form submission
    alert('Form submitted successfully!');
 
    // Redirect to another page
    window.location.href = 'nextpage.html';
});
