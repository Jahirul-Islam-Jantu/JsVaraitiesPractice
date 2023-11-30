const learnApi = document.querySelector("#learn");


function clickTextHandler(){
    fetch('https://jsonplaceholder.typicode.com/posts/5')
      .then(response => response.json())
      .then(json => console.log(json.id))
}






learnApi.addEventListener('click', clickTextHandler);