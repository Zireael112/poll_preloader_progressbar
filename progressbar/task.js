const progress = document.getElementById('progress')
const requestURL = 'https://students.netoservices.ru/nestjs-backend/upload'
const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const xhr = new XMLHttpRequest()
    
    xhr.addEventListener('loadend', () => {
        if (xhr.readyState === xhr.DONE) {
            console.log(xhr.response)
        }
    })

    xhr.upload.onloadstart = () => {
        while(progress.value !== 1.0) {
            progress.value += 0.1
            continue
        }
    }

    xhr.open('POST', requestURL)

    const formData = new FormData(form)

    xhr.send(formData)
})
