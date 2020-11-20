console.log("index js loaded")

const api = new ApiService();


const init = () =>{
  renderCars()
  console.log("hi")
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
  for(form of logForms){
    form.addEventListener("submit", function(e){
      e.preventDefault()
      const carId = e.target.parentElement.parentElement.id.split("logs-")[1]
      const formData = new FormData(e.target)
      // const logData = {
      //   car_id: carId,
      //   mileage: e.target.querySelector(".log-mileage").value ,
      //   service: e.target.querySelector(".log-service").value
      // }
      formData.append("log[car_id]", carId)
      api.postLog(formData)
      .then(()=>{
        renderCars()
      })
      // check if log has errors if so throw alert else re render the whole page(because im lazy)
     

      // debugger
    })
  }
}

async function renderCars(){
  Car.all = []
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