//counter code
var button = document.getElementById('btn_clickme');

button.onclick = function(){
// make a request to the counter endpoint
    var request = new XMLHttpRequest();

// capture the response and store it in a variable.
    request.onreadystatechange = function()
    {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status === 200){
          counter = request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
          }
      }  
    };
    request.open('GET', 'http://vinodrn.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name
var nameInput = document.getElementByID('name');
var name = nameInput.value;
var submit = d