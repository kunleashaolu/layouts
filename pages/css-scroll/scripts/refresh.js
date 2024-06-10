import { scrollend } from 'https://cdn.jsdelivr.net/gh/argyleink/scrollyfills@latest/dist/scrollyfills.modern.js'

const ptr_scrollport = document.querySelector('html')
const ptr = document.querySelector('#refresh')
const main = document.querySelector('#refresh-main')

const determinePTR = (event) => {
  if (event.target.scrollTop <= 0) {
    // fetch()
    ptr.querySelector('span').textContent = 'refreshing...'
    ptr.setAttribute('loading-state', 'loading')

    // sim response
    setTimeout(() => {
      ptr.querySelector('span').textContent = 'done!'

      setTimeout(() => {
        ptr.removeAttribute('loading-state')
        main.scrollIntoView({ behavior: 'smooth' })

        window.addEventListener(
          'scrollend',
          (e) => {
            ptr.querySelector('span').textContent = 'Pull to refresh'
          },
          { once: true }
        )
      }, 500)
    }, 2000)
  }
}

window.addEventListener('scrollend', (e) => {
  determinePTR({ target: ptr_scrollport })
})
