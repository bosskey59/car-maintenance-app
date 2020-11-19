class ApiService{

  constructor() {
    this.baseUrl = `http://localhost:3000`;
    this.options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  }

  async getAllCars(){
    const resp = await fetch(this.baseUrl+"/cars")
    const data = await resp.json()
    return data
  }

  async postLog(logObj){
    const resp = await fetch(this.baseUrl+"/logs",{...this.options, body: JSON.stringify(logObj)})
    const data = await resp.json()
    return data
  }

  // getAllCarsthen(){
  //   return fetch(this.baseUrl+"/cars")
  //   .then(resp =>resp.json())
  
  // }



}