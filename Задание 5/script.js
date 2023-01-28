const resultNode = document.querySelector('.result')
const btn = document.querySelector('.btn')
const inputPage = document.querySelector('.page-num')
const inputLimit = document.querySelector('.limit')

const useRequest = (page, limit) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => {
        result = response.json()
        return result
    })
    .then((data) => {
        localStorage.setItem('myJSON', JSON.stringify(data))
        localStorage.setItem('myPage', page)
        localStorage.setItem('myLimit', limit)
        displayResult(data)
    })
    .catch(() => {
        console.log('Ошибка')
    })
}

function displayResult(apiData) {
    let cards = ''
  
    apiData.forEach(item => {
      const cardBlock = `
        <div>
          <img src="${item.download_url}" class="image" />
          <p>${item.author}</p>
        </div>
      `
      cards = cards + cardBlock
    })
  
    resultNode.innerHTML = cards
  }

btn.addEventListener('click', async () => {
    let page = +inputPage.value
    let limit = +inputLimit.value

    if ((page >= 1 && page <= 10) && (limit >= 1 && limit <= 10)) {
        useRequest(page, limit)
    } else if ((page < 1 || page > 10 || isNaN(page)) && (limit < 1 || limit > 10 || isNaN(limit))) {
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
    } else if (limit < 1 || limit > 10 || isNaN(limit)) {
        resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10'
    } else {
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    }
})

const myJSON = localStorage.getItem('myJSON')
if (myJSON) {
    displayResult(JSON.parse(myJSON))
    inputPage.value = localStorage.getItem('myPage')
    inputLimit.value = localStorage.getItem('myLimit')
}