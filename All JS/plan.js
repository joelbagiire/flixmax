var packageRegular = document.querySelector('#regular')
var packageBasic = document.querySelector('#basic')
var packageStandard = document.querySelector('#standard')
var packagePremium = document.querySelector('#premium')
var signOut = document.querySelector('#btn_signout')
var nxtBtn = document.querySelector('#nxt')
var model = document.querySelector('#model')
var closeBtn = document.querySelector('#btn_close')
var fee = document.querySelector('#fee')



packageRegular.addEventListener('click',(e) => {
  nxtBtn.style.cursor = 'pointer'
  packageBasic.classList.remove('active')
  packageStandard.classList.remove('active')
  packagePremium.classList.remove('active')
  packageRegular.classList.add('active')
  if(packageRegular.classList.contains('active')){
    nxtBtn.style.cursor = 'pointer'
    nxtBtn.setAttribute('title','next')
    nxtBtn.addEventListener('click',() => {
      model.style.display = 'flex'
      fee.innerHTML = '$ 30USD'
      closeBtn.addEventListener('click',() => {
        model.style.display = 'none'
      })
  })
  }else{
    nxtBtn.style.cursor = 'not-allowed'
    nxtBtn.setAttribute('title','Choose a package')
  }
 })
 packageBasic.addEventListener('click',() => {
  nxtBtn.style.cursor = 'pointer'
  packageRegular.classList.remove('active')
  packageStandard.classList.remove('active')
  packagePremium.classList.remove('active')
  packageBasic.classList.add('active')
  if(packageBasic.classList.contains('active')){
    nxtBtn.style.cursor = 'pointer'
    nxtBtn.setAttribute('title','next')
    nxtBtn.addEventListener('click',() => {
      model.style.display = 'flex'
      fee.innerHTML = '$ 70USD'
      closeBtn.addEventListener('click',() => {
        model.style.display = 'none'
      })
  })
  }else{
    nxtBtn.style.cursor = 'not-allowed'
    nxtBtn.setAttribute('title','Choose a package')
  }
})
packageStandard.addEventListener('click',() => {
  nxtBtn.style.cursor = 'pointer'
  packageRegular.classList.remove('active')
  packageBasic.classList.remove('active')
  packagePremium.classList.remove('active')
  packageStandard.classList.add('active')
  if(packageStandard.classList.contains('active')){
    nxtBtn.style.cursor = 'pointer'
    nxtBtn.setAttribute('title','next')
    nxtBtn.addEventListener('click',() => {
      model.style.display = 'flex'
      fee.innerHTML = '$ 100USD'
      closeBtn.addEventListener('click',() => {
        model.style.display = 'none'
      })
  })
  }else{
    nxtBtn.style.cursor = 'not-allowed'
    nxtBtn.setAttribute('title','Choose a package')
  }
})
packagePremium.addEventListener('click',() => {
  nxtBtn.style.cursor = 'pointer'
  packageRegular.classList.remove('active')
  packageStandard.classList.remove('active')
  packageBasic.classList.remove('active')
  packagePremium.classList.add('active')
  if(packagePremium.classList.contains('active')){
    nxtBtn.style.cursor = 'pointer'
    nxtBtn.setAttribute('title','next')
    nxtBtn.addEventListener('click',() => {
      model.style.display = 'flex'
      fee.innerHTML = '$ 140USD'
      closeBtn.addEventListener('click',() => {
        model.style.display = 'none'
      })
  })
  }else{
    nxtBtn.style.cursor = 'not-allowed'
    nxtBtn.setAttribute('title','Choose a package')
  }
})


