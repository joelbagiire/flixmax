const visible = document.querySelector('#visible')
const invisible = document.querySelector('#invisible')
const password = document.querySelector('#password')

visible.addEventListener('click', () => {
  if(window.confirm('Your password will be visible')){
      password.type = "text"
      visible.style.display = "none"
      invisible.style.display = "block"
  }else{
      password.type = "password"
      invisible.style.display = "none"
      visible.style.display = "block"
  }
})
invisible.addEventListener('click', () => {
    password.type = "password"
    invisible.style.display = "none"
    visible.style.display = "block"
})