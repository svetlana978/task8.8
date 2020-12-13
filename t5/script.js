duplicateField = document.querySelector('#duplicateField');


document.querySelector('#inputText').addEventListener('keyup',
    function() {
        duplicateField.textContent = this.value;
    })

document.querySelector('#clickButton').addEventListener('click',
    function(event) {
        console.log(inputText.value);
        duplicateField.textContent = "";
        inputText.value = "";
        event.preventDefault();
    })