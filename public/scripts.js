;(function () {
  let i = 0
  const btnIncrement = document.getElementById('btn-increment')
  const btnDecrement = document.getElementById('btn-decrement')
  const counter = document.getElementById('counter')

  btnIncrement.addEventListener('click', () => {
    i++
    counter.innerHTML = i
  })

  btnDecrement.addEventListener('click', () => {
    i--
    counter.innerHTML = i
  })
})()
