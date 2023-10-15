document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keydown', function(event) {
        event.preventDefault();
    });
});
