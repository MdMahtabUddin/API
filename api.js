// PH 33-3 JSON placeholder, GET data, display data on UI

function loadData (){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json.title))
}

// 33-5 Dynamically display loaded data on your website

function loadUser(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json() )
  .then(data =>displayUsers(data))
  
}

function displayUsers(data){
const ul = document.getElementById('users')
  for(const user of data){
    // console.log(user.name)
    const li = document.createElement('li')
    li.innerText =`name: ${user.name} ,
     email: ${user.email}`
    ul.appendChild(li);
  }
}

