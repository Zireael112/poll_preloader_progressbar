const progress = document.getElementById('progress')
const requestURL = 'https://netology-slow-rest.herokuapp.com/upload.php'

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const formData = new FormData(document.getElementById('form'))
    const xhr = new XMLHttpRequest()

    xhr.open('POST', requestURL)

    xhr.onprogress = function(event) {        
        progress.value = event.loaded / 5000000
    }

    xhr.send(formData);
})