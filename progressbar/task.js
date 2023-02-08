const progress = document.getElementById('progress')
const requestURL = 'https://students.netoservices.ru/nestjs-backend/upload'
const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const xhr = new XMLHttpRequest()

    setInterval(() => {
        if (progress.value !== 1.0) {
            progress.value += 0.1
        }
    }, 50)

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            console.log(xhr.response)
        }
    })

    xhr.open('POST', requestURL)

    const formData = new FormData(form)

    xhr.send(formData)
})
