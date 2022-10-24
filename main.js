
const api= "https://www.breakingbadapi.com/api/characters";
async function get() { 
  const response = await fetch(api)
  const data = await response.json()
  console.log(data[0].name);
  

  // document.querySelector("#content img").src = data[0].img
  document.querySelector("#actors").innerHTML =
    ` <select class="form-control" onchange="getCh(this.value)">
    ${
  data.map(actors =>`<option>${actors.name}</option>` ) 
     } 
    </select>`
}
 async function getCh(name) {
   const response = await fetch(`${api}?name=${name}`)
   const data = await response.json(); 
   const actorName = document.querySelector("#content h1").innerHTML =
     `<h2>${data[0].name} (${data[0].nickname})</h2>
     <h4>${data[0].portrayed} </h4> 
    <img src=${data[0].img} width="250"> 
     ` 
 }
get();