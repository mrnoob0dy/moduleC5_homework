const resultNode = document.querySelector('.result')
const btn = document.querySelector('.btn')

const useRequest = (width, height) => {
    return fetch(`https://picsum.photos/${width}/${height}`)
    .then((response) => {
        resultNode.innerHTML = `
        <img src=${response.url} class="card-image"/>
      `
    })
    .catch(() => {
        console.log('Ошибка')
    })
}

btn.addEventListener('click', async () => {
    const inputWidth = parseInt(document.querySelector('.width').value)
    const inputHeight = parseInt(document.querySelector('.height').value)


    if ((inputWidth >= 100 && inputWidth <= 300) && (inputHeight >= 100 && inputHeight <= 300)) {
        await useRequest(inputWidth, inputHeight)
    } else {
        resultNode.innerHTML = 'Вы ввели число вне диапазона от 100 до 300'
    }
})