/*=====================AXIOS========================*/
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

//POST
const res = await axios.post('https://jsonplaceholder.typicode.com/users',
newContact)
  dispatch({ type: "ADD_CONTACT", 
  payload: res.data });
-----------------
const data = {
  name: "John",
  email: "email@email.com"
};

axios.post(url, data)
.then(res => {
  console.log(res.data);
});
----------
//GET
 const res = await axios.get('https://jsonplaceholder.typicode.com/users')
 this.setState({contacts:res.data})
------------
  axios.get(url)
    .then(res => {
    console.log(res.data);
  });


/* ======================FETCH===========================*/
const url = 'https://jsonplaceholder.typicode.com/post';

//GET
  fetch(url)
  .then (data=>{return data.json()})
  .then(res=>{console.log(res)})
--------------
fetch(url)
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState({ contacts: res });
      });
--------------------------
//POST
//init takes in object parameters for fetch api
  const init = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "John",
      email: "email@email.com"
    })
  };

  fetch(url, init)
  .then(data => {
    console.log(data);
  });

  /* ==========================AJAX======================= */
const HTTP =  new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/post';

//GET
HTTP.open('GET', url);
HTTP.onload =()=>{
            console.log(JSON.parse(HTTP.responseText));
        }
        HTTP.send();
---------------
  const http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = () => {
      this.setState({ contacts: JSON.parse(http.responseText) });
    };
    http.send();

//POST
  const http= new XMLHttpRequest();
    http.open('POST',"https://jsonplaceholder.typicode.com/users")
    http.send(contact);

/* ====================jQuery AJAX=====================*/
//GET
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
---------------
    import $ from "jquery";
    $.ajax({
      url: url,
      type: "GET",
      success: result => {
        this.setState({ contacts: result });
      },
      error: function(error) {
        console.log(`Error: ${error}`);
      }
    });

//POST 
  $.ajax({
    url: url,
    type: "POST",
    data: {
      name: "John",
      email: "email@email.com"
    },
    success: result => {
      console.log(result);
    }
  });

/* JSON.stringify - Turns object into JSON data to send to server
JSON.parse - Turns JSON data to object*/

