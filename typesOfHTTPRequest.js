/* ------------------AXIOS----------------------- */
const res = await axios.post('https://jsonplaceholder.typicode.com/users',
newContact)
  dispatch({ type: "ADD_CONTACT", 
  payload: res.data })
----------
 const res = await axios.get('https://jsonplaceholder.typicode.com/users')
 this.setState({contacts:res.data})

/* -------------------FETCH------------------- */
const url = 'https://jsonplaceholder.typicode.com/post';

  fetch(url)
  .then (data=>{return data.json()})
  .then(res=>{console.log(res)})
-------------
fetch(url)
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState({ contacts: res });
      });

  /* ----------------AJAX----------------------------- */
const HTTP =  new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/post';

HTTP.open('GET', url);
HTTP.onload =()=>{
            console.log(JSON.parse(HTTP.responseText));
        }
        HTTP.send();
HTTP.send();
---------------
  const http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = () => {
      this.setState({ contacts: JSON.parse(http.responseText) });
    };
    http.send();

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

/* JSON.stringify - Turns object into string to send to server
JSON.parse - Turns JSON data to object*/

