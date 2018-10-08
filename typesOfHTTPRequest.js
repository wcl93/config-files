/* ------------------AXIOS----------------------- */
const res = await axios.post('https://jsonplaceholder.typicode.com/users',
newContact)
  dispatch({ type: "ADD_CONTACT", 
  payload: res.data })

/* -------------------FETCH------------------- */
const url = 'https://jsonplaceholder.typicode.com/post';

  fetch(url)
  .then (data=>{return data.json()})
  .then(res=>{console.log(res)})

  /* ----------------AJAX----------------------------- */
const HTTP =  new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/post';

HTTP.open('GET', url);
HTTP.send();

HTTP.onreadystatechange=(e)=>{
    console.log(HTTP.responseText)
}

/* ----------------------jQuery AJAX--------------------- */
$(document.readyState(function(){
    const url = 'https://jsonplaceholder.typicode.com/post';

    $.ajax({
        url:url,
        type:'GET',
        success:function(result){
            console.log(result)
        },
        error:function(error){
            console.log(`Error: ${error}`)
        }
    })
}))

/* JSON.stringify - Turns object into string to send to server
JSON.parse - Turns JSON data to object*/

