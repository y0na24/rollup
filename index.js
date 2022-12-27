import './index.css'
import JS_IMAGE from './assets/js.png'

console.log('Hello world')

function createImg(src) {
  const jsImageHTML = document.createElement('img')
  jsImageHTML.classList.add('js-image')
  jsImageHTML.src = src

  document.body.append(jsImageHTML)
}


function createTitle(text) {
  const titleHTML = document.createElement('h1')
  titleHTML.classList.add('title')
  titleHTML.textContent = text

  document.body.append(titleHTML)
}

createTitle('I love JavaScript')
createImg(JS_IMAGE)


