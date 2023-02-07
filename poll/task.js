const pollTitle = document.getElementById('poll__title')
const pollAnswer = document.getElementById('poll__answers')
const requestURL = 'https://students.netoservices.ru/nestjs-backend/poll'

const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const parsed = JSON.parse(xhr.response)
        console.log(parsed)
        const titlePoll = parsed.data.title
        const answerPoll = parsed.data.answers

        pollTitle.innerHTML += titlePoll
        // pollAnswer.innerHTML += answerPoll
        answerPoll.forEach(el => {
            pollAnswer.innerHTML += `
            <button class="poll__answer">
            ${el}
            </button>
            `
        
        const buttons = Array.from(document.getElementsByClassName('poll__answer'))

        buttons.forEach((el) => {
            el.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
                location.reload()
            })
        })
        })
    }
})



xhr.send()