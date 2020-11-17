console.log("index js loaded")

const api = new ApiService();


const init = () =>{
  renderCars()
  // bindEvents()
}

// function

async function renderCars(){
  const cars = await api.getAllCars()
  for(car of cars){
    new Car(car)
  }
  const mainContent = document.querySelector("#main-content")
  mainContent.innerHTML = ""
  mainContent.innerHTML = Car.renderAll()

}


init()