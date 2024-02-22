// Promises giai quyet CallBack Hell

const callback = (error, data) => {
  if(error){
    console.log('calling callback with error', error )
  };
  
  if(data){
    console.log('calling callback with data', data)
  };
};

function gettodos (id, callback) {

  return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
      if (this.readyState === 4 && request.status === 200) {
              // Typical action to be performed when the document is ready:
         const data = JSON.parse(request.responseText);
         const dataString = JSON.stringify(data);
      
      //    callback(undefined, data);
      //    callback(undefined, dataString);
      resolve(data)
      } 
      
      if(this.readyState === 4  && request.status !== 200){
      //   callback('Somthing wrongs', undefined);
      reject('something wrongs ')
      }
      // else {
      //   console.log(">>> status: ",request.status);
      //   }
       };
      request.open("GET", `http://jsonplaceholder.typicode.com/todos/${id}`, true);
      request.withCredentials = true;
      request.send();
  })

};


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(data =>{
    return data.json();
  })
  .then(data => {
    console.log('check data: >> ', data);
  })

// promises example

const promisesExp = () =>{
  return new Promise((resolve, reject) => {
      // resolve('get some data')
      reject('something wrongs')
  });
}
