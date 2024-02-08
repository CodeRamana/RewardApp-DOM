const mainEl =document.querySelector("main")
const sectionEl =document.querySelector("section")
console.log(mainEl)
console.log(sectionEl)
const formEl=mainEl.querySelector("form")
console.log(formEl)

formEl.addEventListener('submit',(event)=>{
    event.preventDefault()
   sectionEl.classList.remove("hidden")
   mainEl.classList.add("hidden")
   const formDataValue=new FormData(formEl)
   console.log([...formDataValue.entries()])
})