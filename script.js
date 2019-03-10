function json(response) {
    return response.json()
  }
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(status)
    .then(json)
    .then(function(data) {
      console.log('Request succeeded with JSON response', data);
    }).catch(function(error) {
      console.log('Request failed', error);
    });
  
    const req = new XMLHttpRequest(); 
    req.open('GET','https://jsonplaceholder.typicode.com/users'); 
    req.onload = function () { 
        const data = JSON.parse(req.response);
        if (req.status == 200) { 
            console.log (req.responseText);
            data.forEach(function (name) {
                console.log(name.email);
                document.getElementById("output").innerHTML = name.email; 
            });
        } else { 
            console.log('ERROR', req.statusText); 
        } 
    };
    req.onerror = function () { 
        console.log('Network Error'); 
    }; 
    req.send(); // Add request to task queue

