const requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
const loader = document.querySelector('.loader_active')
const items = document.getElementById('items')
// xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === xhr.DONE) {
//         loader.classList.remove('loader_active')
//         for (let el of xhr.responseText) {
//             console.log(el)
//         }
//     }
// })

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url) 

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE && xhr.status < 400) {
                loader.classList.remove('loader_active')
                resolve(JSON.parse(xhr.response))
            }
        })

        xhr.onerror = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }
        }

        xhr.send()
    })
}

sendRequest('GET', requestURL)
    .then(data => {
        let valutes = {}
        let nameVal = data.response.Valute  
        for (let el in nameVal) {
            valutes[el] = nameVal[el].Value

        }
        return valutes
    })
    .then(data => {
        for (let name in data) {
            // console.log(name, data[name])
            items.innerHTML +=  `
            <div class="item">
            <div class="item__code">
                    ${name}
                </div>
                <div class="item__value">
                    ${data[name]}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>
            `
        }
    })
    .catch((data) => console.error(`Ошибка ---> ${data}`))

