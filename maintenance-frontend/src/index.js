console.log("index js loaded")

const api = new ApiService();


const init = () =>{
  renderCars()
  // bindEvents()
}

function bindLogEvent(){
  const logBtns = document.querySelectorAll(".logs-btn")
  for(btn of logBtns){
    btn.addEventListener("click",function(e){
      // console.log(e.target.id.split("car-")[1])
      const logsDiv = document.querySelector(`#logs-${e.target.id.split("car-")[1]}`)
      if(logsDiv.classList.contains("display-log")){
        logsDiv.classList.remove("display-log")
      }else{
        logsDiv.classList.add("display-log")
      }
    })
  }
}

function bindLogForm(){
  const logForms = document.querySelectorAll(".log-form")
  debugger
}

async function renderCars(){
  const cars = await api.getAllCars()
  for(car of cars){
    new Car(car)
  }
  const mainContent = document.querySelector("#main-content")
  mainContent.innerHTML = ""
  mainContent.innerHTML = Car.renderAll()
  bindLogEvent()
  bindLogForm()

}


init()