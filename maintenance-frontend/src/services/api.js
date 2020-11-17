class ApiService{

  constructor() {
    this.baseUrl = `http://localhost:3000`;
  }

  async getAllCars(){
    const resp = await fetch(this.baseUrl+"/cars")
    const data = await resp.json()
    return data
  }

  // getAllCarsthen(){
  //   fetch(this.baseUrl+"/cars")
  //   .then(resp =>resp.json())
  //   .then( data =>{
  //     debugger
  //   })
  // }



}