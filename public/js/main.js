const mainEl =document.querySelector("main")
const sectionEl =document.querySelector("section")
// console.log(mainEl)
// console.log(sectionEl)
const formEl=mainEl.querySelector("form")
//console.log(formEl)

const validateAll =()=>{
    let elements =formEl.elements
    for (const element of elements) {
        if(!element.hasAttribute("required")){
            element.required = true;
            return false
        }
        else{
            return true;
        }
        
    }

}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    if(validateAll()){
        const formDatas =new FormData(formEl)
   // console.log([...formDatas.entries()])
    const obj =Object.fromEntries(formDatas)
   // console.log(obj)
    addData(obj)
    updateUI()
    }
    else{
        validateAll()
    }
    
   
})

const updateUI =()=>{
    mainEl.classList.add("hidden")
    sectionEl.classList.remove("hidden")
}