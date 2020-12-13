document.querySelector('#linkText').addEventListener('click',
    function(event) {
        this.textContent = prompt('Введите текст');
        event.preventDefault();

    })