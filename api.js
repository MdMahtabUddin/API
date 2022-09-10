// PH 33-3 JSON placeholder, GET data, display data on UI

function loadData (){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json.title))
}

