var certificate = document.getElementById('Certificates');
var modal = document.querySelector('.modal');
var button = document.querySelector('.closeButton');

certificate.addEventListener('click', function() {
    modal.showModal();
})

button.addEventListener('click', function() {
    modal.close();
})