document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ticket purchased successfully!');
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
});
