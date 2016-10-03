//counter code
var button = document.getElementById('btn_clickme');

button.onclick = function(){
// make a request to the counter endpoint
    var request = new XMLHttpRequest();

// capture the response and store it in a variable.
    request.onreadystatechange = function()
    {
      if(this.readyState === XMLHttpRequest.DONE)
      {
          //take some action
          if(this.status === 200){
          counter = request.responseText;
          console.log(counter);
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
          }
      }  
    };
    request.open('GET', 'http://vinodrn.imad.hasura-app.io/counter',true);
    request.send(null);
};